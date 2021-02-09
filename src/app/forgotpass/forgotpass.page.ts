import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../services/common.service';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.page.html',
  styleUrls: ['./forgotpass.page.scss'],
})
export class ForgotpassPage implements OnInit {

  forgot_form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private statusBar: StatusBar,
    private common: CommonService,
    private service: ApiService,
    private router:Router,
    ) { 

      this.forgotpass_fb();      
    }

    forgotpass_fb(){
      this.forgot_form = this.formBuilder.group({
        email: [null, Validators.compose([
          Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'),
          Validators.required
        ])]
      });
    }
    
    forgotPassword(){
      for (let v in this.forgot_form.controls) {
        this.forgot_form.controls[v].markAsTouched();
      }
      if (this.forgot_form.valid) {
        this.common.presentLoading();
        var body = {
          "email": this.forgot_form.value.email
        };
        this.service.ForgotPasswordUser(body).subscribe(val =>{
          if(this.common.isLoading){
            this.common.dismissLoading();
          }
          if(val.status){

          }else{
            this.forgot_form.controls['email'].setErrors({'incorrect': true});
            this.forgot_form.controls['email'].markAsTouched();
          }
          this.common.presentToastWithOptions(val.message);
        },err=>{
          console.log('Forgot Password Err:', err);
          if(this.common.isLoading){
            this.common.dismissLoading();
          }
          this.common.presentToastWithOptions('Server Problem, Please try again.');
        });
        
      }
    }

  ngOnInit() {
  }

  back(){
    this.navCtrl.pop();
  }

  ionViewWillEnter() {
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#f1f1f1');
  }

}
