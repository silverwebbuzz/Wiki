import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../services/common.service';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { Constants } from '../interface/constants.models';
import { AuthGuard } from '../guard/auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login_form: FormGroup;

  constructor(private navCtrl: NavController,
    private statusBar: StatusBar,
    private common: CommonService,
    private service: ApiService,
    private router:Router,
    private guard:AuthGuard,
    private formBuilder: FormBuilder) { 

      this.login_fb();
    }

  ngOnInit() {
  }

  login_fb(){
    this.login_form = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }
  doLogin(){
    for (let v in this.login_form.controls) {
      this.login_form.controls[v].markAsTouched();
    }
    if (this.login_form.valid) {
      this.common.presentLoading();
      let body = {
        "username": this.login_form.value.username,
        "password": this.login_form.value.password
      };
      this.service.LoginUser(body).subscribe(val=>{
        if(this.common.isLoading){
          this.common.dismissLoading();
        }
        if(val.status){
            window.localStorage.setItem(Constants.USER_DETAILS, JSON.stringify(val.user_detail));
            this.common.presentToastWithOptions("Login Successfully.");
            this.router.navigate(['/home']);
        }else{

          if(val.field_name == "username"){
            this.login_form.controls['username'].setErrors({'incorrect': true});
            this.login_form.controls['username'].markAsTouched();
          }else if(val.field_name == "password"){
            this.login_form.controls['password'].setErrors({'incorrect': true});
            this.login_form.controls['password'].markAsTouched();
          }
          this.common.presentToastWithOptions(val.message);
        }
      },err=>{
        console.log('Login Err:', err);
        if(this.common.isLoading){
          this.common.dismissLoading();
        }
        this.common.presentToastWithOptions('Server Problem, Please try again.');
      })
    }
  }

  ionViewWillEnter() {
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#f1f1f1');
  }

  back(){
    this.navCtrl.pop();
  }
  

}
