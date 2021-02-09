import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ConfirmPasswordValidator } from '../_helper/must-match.validator';
import { CommonService } from '../services/common.service';
import { ApiService } from '../services/api.service';
import { Constants } from '../interface/constants.models';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {

  change_form: FormGroup;

  constructor(private navCtrl: NavController,
    private statusBar: StatusBar,
    private common:CommonService,
    private service:ApiService,
    private formBuilder: FormBuilder) {
      this.registration_fb();
     }

  ngOnInit() {
  }

  registration_fb() {
    this.change_form = this.formBuilder.group({
      oldpassword: [null, Validators.required],
      password: [null, Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ])],
      confirmpassword: [null, Validators.required]
    },{validator: ConfirmPasswordValidator.MatchPassword});
  };

  ionViewWillEnter() {
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#f1f1f1');
  }

  back(){
    this.navCtrl.pop();
  }

  submit(){
    let userInfo = JSON.parse(window.localStorage.getItem(Constants.USER_DETAILS));
    for (let v in this.change_form.controls) {
      this.change_form.controls[v].markAsTouched();
    }
    if (this.change_form.valid) {
      this.common.presentLoading();
      const body = {
          "curr_password" : this.change_form.value.oldpassword,
          "new_password" : this.change_form.value.password,
          "userid" : userInfo.id
      };

      this.service.updateProfilePassword(body).subscribe(val=>{
        if(this.common.isLoading){
          this.common.dismissLoading();
        }
        if(val.status){
          this.change_form.reset();
          this.common.presentToastWithOptions(val.message);
        
        }else{
          // if(val.fieldname == "username"){
          //   this.registration_form.controls['username'].setErrors({'incorrect': true});
          //   this.registration_form.controls['username'].markAsTouched();
          // }else if(val.fieldname == "email"){
          //   this.registration_form.controls['email'].setErrors({'incorrect': true});
          //   this.registration_form.controls['email'].markAsTouched();
          // }else{
          //   this.registration_form.controls['username'].setErrors({'incorrect': true});
          //   this.registration_form.controls['username'].markAsTouched();
          //   this.registration_form.controls['email'].setErrors({'incorrect': true});
          //   this.registration_form.controls['email'].markAsTouched();
          // }
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

}
