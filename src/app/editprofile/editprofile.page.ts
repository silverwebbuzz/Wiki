import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Constants } from '../interface/constants.models';
import { CommonService } from '../services/common.service';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {

  edit_form: FormGroup;
  uploadCoverFile = null;
  uploadProfileFile = null;
  imgCoverURL: any = null;
  imgProfileURL:any = null;
  userDetails: any = null;
  newsletter:any;

  constructor(private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private common:CommonService,
    private service: ApiService,
    private router: Router,
    private statusBar: StatusBar) {
      this.userDetails = JSON.parse(window.localStorage.getItem(Constants.USER_DETAILS));
      this.newsletter = this.userDetails.newslatter_subscribe;
      console.log('newsletter:',this.newsletter);
      this.edit_fb();
     }

  ngOnInit() {
  }

  back(){
    this.navCtrl.pop();
  } 

  edit_fb() {
    this.edit_form = this.formBuilder.group({
      firstname: [this.userDetails.firstname, Validators.required],
      lastname: [this.userDetails.lastname, Validators.required],
      phonenumber : [this.userDetails.mobileno, Validators.required],
      skills : [this.userDetails.skill, Validators.required], 
      address : [this.userDetails.address, Validators.required],
      about : [this.userDetails.about, Validators.required],
      coverpic:[null],
      profilepic:[null]
    });
  };

  fileCoverUpload(event){
    this.uploadCoverFile = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(this.uploadCoverFile); 
    reader.onload = (_event) => { 
      this.imgCoverURL = reader.result; 
    }
  }

  newsletterChange(event){
    if(event.detail.checked){
      this.newsletter = '1';
    }else{
      this.newsletter = '0';
    }
  }

  fileProfileUpload(event){
    this.uploadProfileFile = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(this.uploadProfileFile); 
    reader.onload = (_event) => { 
      this.imgProfileURL = reader.result; 
    }
  }

  ionViewWillEnter() {
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#f1f1f1');
  }

  submit(){
    for (let v in this.edit_form.controls) {
      this.edit_form.controls[v].markAsTouched();
    }
    if (this.edit_form.valid) {
      this.common.presentLoading();

      let formData = new FormData();
      
      formData.append('userid',this.userDetails.id);
      formData.append('firstname', this.edit_form.value.firstname);
      formData.append('lastname', this.edit_form.value.lastname);
      formData.append('address', this.edit_form.value.address);
      formData.append('mobileno', this.edit_form.value.phonenumber);
      formData.append('skill', this.edit_form.value.skills);
      formData.append('about', this.edit_form.value.about);
      formData.append('newslatter_subscribe', this.newsletter);
      formData.append('cover_image', this.uploadCoverFile);
      formData.append('profile_image', this.uploadProfileFile);
      
      this.service.editUserProfile(formData).subscribe(val=>{
        if(this.common.isLoading){
          this.common.dismissLoading();
        }
        if(val.status){
          window.localStorage.setItem(Constants.USER_DETAILS,JSON.stringify(val.userdata));
          this.router.navigate(['/userprofile']);
        }else{

        }
        this.common.presentToastWithOptions(val.message);
      },(err)=>{
        if(this.common.isLoading){
          this.common.dismissLoading();
        }
        this.common.presentToastWithOptions('Server Problem, Please try again.');
        console.log('Upload Err:',err);
      })
    }
  }

}
