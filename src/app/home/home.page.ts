import { Component, OnInit, Inject } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ApiService } from '../services/api.service';
import { Constants } from '../interface/constants.models';
import { CommonService } from '../services/common.service';
import { NavigationExtras, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { APP_CONFIG, AppConfig } from '../app.config';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  isLoaded= false;
  isLoggedIn = false;
  UserId = 0;
  UserDetail = null;
  userResumes = [];
  allUsers = [];
  filterUsers = [];
  allNews = [];
  nofilterResult: boolean = false;
  profileURL = this.config.profileURL;

  constructor(@Inject(APP_CONFIG) private config:AppConfig,private menu: MenuController,
    private service:ApiService,
    private common: CommonService,
    private auth: AuthenticationService,
    private router: Router,
    private sanitizer: DomSanitizer,
    private statusBar: StatusBar) {
      this.auth.isLoggedIn.subscribe(val=>{
        if(!val){
          this.userResumes = [];
          this.isLoggedIn = false;
        }
      });
  }
  ngOnInit() {
  }

  getUserDetails(){
    let userDetails = JSON.parse(window.localStorage.getItem(Constants.USER_DETAILS));
    console.log(userDetails);
    if(userDetails){
      this.isLoggedIn = true;
      this.UserId = userDetails.id;
      this.UserDetail = userDetails;
      if(this.UserDetail.user_type_id == 3){
        this.service.getAllUsers().subscribe(val =>{
          console.log('val:',val);
          this.isLoaded = true;
          if(val.status){
            this.allUsers = val.users_data;
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
        });
      }else if(this.UserDetail.user_type_id == 2){
        var body = {
          "userid": this.UserId
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
      
    }else{
      this.isLoggedIn = false;
      this.isLoaded = true;
    }
  }

  previewResume(resumes){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        resume: JSON.stringify(resumes)
      }
    };
    this.router.navigate(['/preview'], navigationExtras);
  }

  ionViewWillEnter() {
    this.getUserDetails();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#f1f1f1');
    
    //console.log(this.filterUsers);
  }

  filterUserList(event){
    let searchTerms = event.detail.value;
    
    if(searchTerms){
      this.filterUsers = this.allUsers.filter(val=>{
        return val.username.toLowerCase().indexOf(searchTerms.toLowerCase()) > -1 || val.email.toLowerCase().indexOf(searchTerms.toLowerCase()) > -1 ||
        val.firstname.toLowerCase().indexOf(searchTerms.toLowerCase()) > -1 || val.lastname.toLowerCase().indexOf(searchTerms.toLowerCase()) > -1;
      });
      if(this.filterUsers.length == 0){
        this.nofilterResult = true;
      }
    }else{
      this.nofilterResult = false;
      this.filterUsers = this.allUsers;
    }
  }

  viewUserResumes(userDetail){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        userDetail: JSON.stringify(userDetail)
      }
    };
    this.router.navigate(['/userdetails'], navigationExtras);
  }
}
