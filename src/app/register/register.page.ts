import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from '../_helper/must-match.validator';
import { ApiService } from '../services/api.service';
import { CommonService } from '../services/common.service';
import { Constants } from '../interface/constants.models';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registration_form: FormGroup;
  UserTypes = [];
  constructor(private navCtrl: NavController,
    private router:Router,
    private formBuilder: FormBuilder,
    private statusBar: StatusBar,
    private service:ApiService,
    private auth: AuthenticationService,
    private common:CommonService,
    ) {
      this.UserTypes = JSON.parse(window.localStorage.getItem(Constants.USER_TYPES));
      this.registration_fb();
     }

     registration_fb() {
      this.registration_form = this.formBuilder.group({
        usertype: [this.UserTypes[0].id],
        username: [null, Validators.required],
        firstname: [null, Validators.required],
        lastname: [null, Validators.required],
        email: [null, Validators.compose([
          Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'),
          Validators.required
        ])],
        password: [null, Validators.compose([
          Validators.required,
          Validators.minLength(8)
        ])],
        confirmpassword: [null, Validators.required]
      },{validator: ConfirmPasswordValidator.MatchPassword});
    };

    submitRegister(){
      console.log('type:', this.registration_form.value.usertype);
      for (let v in this.registration_form.controls) {
        this.registration_form.controls[v].markAsTouched();
      }
      if (this.registration_form.valid) {
        this.common.presentLoading();
        const body = {
            "username" : this.registration_form.value.username,
            "firstname" : this.registration_form.value.firstname,
            "lastname" : this.registration_form.value.lastname,
            "email" : this.registration_form.value.email,
            "password" : this.registration_form.value.password,
            "usertype" : this.registration_form.value.usertype,
            "newslatter_subscribe" : "1"
        };

        this.service.RegistrationUser(body).subscribe(val=>{
          if(this.common.isLoading){
            this.common.dismissLoading();
          }
          if(val.status){
            window.localStorage.setItem(Constants.USER_DETAILS, JSON.stringify(val.user_data));
            this.common.presentToastWithOptions(val.message);
          
            this.router.navigate(['/home']);
          }else{
            if(val.fieldname == "username"){
              this.registration_form.controls['username'].setErrors({'incorrect': true});
              this.registration_form.controls['username'].markAsTouched();
            }else if(val.fieldname == "email"){
              this.registration_form.controls['email'].setErrors({'incorrect': true});
              this.registration_form.controls['email'].markAsTouched();
            }else{
              this.registration_form.controls['username'].setErrors({'incorrect': true});
              this.registration_form.controls['username'].markAsTouched();
              this.registration_form.controls['email'].setErrors({'incorrect': true});
              this.registration_form.controls['email'].markAsTouched();
            }
            this.common.presentToastWithOptions(val.message);
          }
        },(err)=>{
          if(this.common.isLoading){
            this.common.dismissLoading();
          }
          console.log('Registration Err:', err);
          this.common.presentToastWithOptions('Server Problem, Please try again.');
        });
      }
    }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#f1f1f1');
  }

  back(){
    this.navCtrl.pop();
  }

}
