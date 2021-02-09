import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from '../_helper/must-match.validator';
import { CommonService } from '../services/common.service';
import { Constants } from '../interface/constants.models';
import { ApiService } from '../services/api.service';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.page.html',
  styleUrls: ['./resume.page.scss'],
})
export class ResumePage implements OnInit {

  resume_form: FormGroup;
  User_details: any = '';
  private uploadFile = null;
  fileType = '';
  fileName = '';
  fileImage = '';
  OtherUserDetail = null;
  constructor(private navCtrl: NavController,
    private statusBar: StatusBar,
    private common:CommonService,
    private router:Router,
    private route: ActivatedRoute,
    private service: ApiService,
    private formBuilder: FormBuilder) {
      this.User_details = JSON.parse(window.localStorage.getItem(Constants.USER_DETAILS));
      this.resume_fb();
     }

  ngOnInit() {
  }

  fileUpload(event){
    this.uploadFile = event.target.files[0];
    this.fileName = event.target.files[0].name;
    this.fileType = event.target.files[0].type;
    if(this.fileType == 'application/pdf'){
      this.fileImage = '../../assets/img/pdf.png';
    }else if(this.fileType == 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || this.fileType == 'application/msword'){
      this.fileImage = '../../assets/img/docx.png';
    }else{
      this.fileImage = '../../assets/img/sample.png';
    }
  }

  resume_fb() {
    this.resume_form = this.formBuilder.group({
      firstname: [this.User_details.firstname, Validators.required],
      lastname: [this.User_details.lastname, Validators.required],
      email: [this.User_details.email, Validators.compose([
        Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'),
        Validators.required
      ])],
      phonenumber : [null, Validators.required],
      qualification : [null, Validators.required], 
      experience : [null, Validators.required], 
      myfile:[null, Validators.required]
    });
  };

  submit(){
    for (let v in this.resume_form.controls) {
      this.resume_form.controls[v].markAsTouched();
    }
    if (this.resume_form.valid) {
      this.common.presentLoading();

      let formData = new FormData();
      if(this.OtherUserDetail){
        formData.append('userid',this.OtherUserDetail.id);
      }else{
        formData.append('userid',this.User_details.id);
      }
      
      formData.append('firstname', this.resume_form.value.firstname);
      formData.append('lastname', this.resume_form.value.lastname);
      formData.append('email', this.resume_form.value.email);
      formData.append('mobileno', this.resume_form.value.phonenumber);
      formData.append('qualification', this.resume_form.value.qualification);
      formData.append('work_experiance', this.resume_form.value.experience);
      formData.append('file', this.uploadFile);
      formData.append('extension', this.fileType);
      
      this.service.UploadUserResume(formData).subscribe(val=>{
        console.log('val:',val);
        if(this.common.isLoading){
          this.common.dismissLoading();
        }
        if(val.status){
          let navigationExtras: NavigationExtras = {
            queryParams: {
              resume: JSON.stringify(val.data)
            }
          };
          this.router.navigate(['/preview'], navigationExtras);
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

  ionViewWillEnter() {
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#f1f1f1');
    this.route.queryParams.subscribe(params => {
      if (params && params.userDetail) {
        this.OtherUserDetail = JSON.parse(params.userDetail);
        
      }
    });
  }

  back(){
    this.navCtrl.pop();
  }

  

}
