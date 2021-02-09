import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CommonService } from '../services/common.service';
import { ApiService } from '../services/api.service';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Constants } from '../interface/constants.models';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.page.html',
  styleUrls: ['./userdetails.page.scss'],
})
export class UserdetailsPage implements OnInit {

  isLoaded=false;
  UserDetail = null;
  userResumes = [];
  constructor(private navCtrl: NavController,
    private common:CommonService,
    private service: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private statusBar: StatusBar) { }

  ngOnInit() {
  }

  previewResume(resumes){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        resume: JSON.stringify(resumes)
      }
    };
    this.router.navigate(['/preview'], navigationExtras);
  }
  
  uploadResume(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        userDetail: JSON.stringify(this.UserDetail)
      }
    };
    this.router.navigate(['/resume'], navigationExtras);
  }

  getUserDetails(){
    this.route.queryParams.subscribe(params => {
      if (params && params.userDetail) {
        this.UserDetail = JSON.parse(params.userDetail);
      }
    });
    var body = {
      "userid": this.UserDetail.id
    }
    this.service.getUserDetails(body).subscribe(val=>{
      console.log('val:',val);
      this.isLoaded = true;
      if(val.status){
        this.userResumes = val.user_info;
      }else{
        //this.common.presentToastWithOptions(val.message);
      }
    },(err)=>{
      this.isLoaded = false;
      if(this.common.isLoading){
        this.common.dismissLoading();
      }
      this.common.presentToastWithOptions('Server Problem, Please try again.');
      console.log('Upload Err:',err);
    })
  }

  ionViewWillEnter() {
    this.getUserDetails();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#f1f1f1');
  }

  back(){
    this.navCtrl.pop();
  }

}
