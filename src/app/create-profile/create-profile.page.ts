import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';
import { Constants } from '../interface/constants.models';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.page.html',
  styleUrls: ['./create-profile.page.scss'],
})
export class CreateProfilePage implements OnInit {

  create_form: FormGroup;

  constructor(private navCtrl: NavController,
    private statusBar: StatusBar,
    private common:CommonService,
    private router:Router,
    private service: ApiService,
    private formBuilder: FormBuilder) {
      this.create_fb();
     }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#f1f1f1');
  }

  create_fb() {
    this.create_form = this.formBuilder.group({
      username: [null, Validators.required],
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      email: [null, Validators.compose([
        Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'),
        Validators.required
      ])],  
    },);
  };

  submit(){
    for (let v in this.create_form.controls) {
      this.create_form.controls[v].markAsTouched();
    }
    if (this.create_form.valid) {
      this.common.presentLoading();

      let userInfo = JSON.parse(window.localStorage.getItem(Constants.USER_DETAILS));
      
      const body = {
        "username" : this.create_form.value.username,
        "firstname" : this.create_form.value.firstname,
        "lastname" : this.create_form.value.lastname,
        "email" : this.create_form.value.email,
        "added_by" : userInfo.id,
    };
      this.service.createUserProfile(body).subscribe(val=>{
        if(this.common.isLoading){
          this.common.dismissLoading();
        }
        if(val.status){
          //window.localStorage.setItem(Constants.USER_DETAILS, JSON.stringify(val.user_data));
          this.common.presentToastWithOptions(val.message);
        
          this.router.navigate(['/home']);
        }else{
          if(val.fieldname == "username"){
            this.create_form.controls['username'].setErrors({'incorrect': true});
            this.create_form.controls['username'].markAsTouched();
          }else if(val.fieldname == "email"){
            this.create_form.controls['email'].setErrors({'incorrect': true});
            this.create_form.controls['email'].markAsTouched();
          }else{
            this.create_form.controls['username'].setErrors({'incorrect': true});
            this.create_form.controls['username'].markAsTouched();
            this.create_form.controls['email'].setErrors({'incorrect': true});
            this.create_form.controls['email'].markAsTouched();
          }
          this.common.presentToastWithOptions(val.message);
        }
      },(err)=>{
        if(this.common.isLoading){
          this.common.dismissLoading();
        }
        this.common.presentToastWithOptions('Server Problem, Please try again.');
        console.log('Create Profile Err:',err);
      })
    }
  }

  back(){
    this.navCtrl.pop();
  }

}
