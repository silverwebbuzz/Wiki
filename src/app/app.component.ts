import { Component } from '@angular/core';

import { Platform, ModalController, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HomePage } from './home/home.page';
import { SplashPage } from './splash/splash.page';
import { myEnterAnimation } from './animations/enter';
import { myLeaveAnimation } from './animations/leave';
import { AuthenticationService } from './services/authentication.service';
import { Constants } from './interface/constants.models';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  isLoggedIn = false;
  username = null;
  rootPage: any = HomePage;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private service: ApiService,
    private auth:AuthenticationService,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController
  ) {
    this.initializeApp();
    this.auth.isLoggedIn.subscribe(val=>{
      if(val){
        let user_details = JSON.parse(window.localStorage.getItem(Constants.USER_DETAILS));
        console.log('user',user_details);
        this.username = user_details.username;
      }
      this.isLoggedIn = val;
    });
    this.service.getPageDetails().subscribe(val=>{
      if(val.status){
        window.localStorage.setItem(Constants.ALL_PAGES,JSON.stringify(val.page_data));
      }
    },err=>{
      console.log('page Err:',err);
    });

    this.service.getUsersType().subscribe(val=>{
      if(val){
        window.localStorage.setItem(Constants.USER_TYPES,JSON.stringify(val.userType));
      }
    },err=>{
      console.log('page Err:',err);
    });
  }

  ionViewWillEnter() {
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#f1f1f1');
  }

  async logout(){
    const alert = await this.alertCtrl.create({
      header: 'Confirm !',
      message: 'Are you sure you want to logout ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'btn-clr',
        }, {
          text: 'Logout',
          cssClass: 'btn-clr',
          handler: () => {
            this.auth.logOut();
          }
        }
      ]
    });

    await alert.present();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      //console.log('test');
      //this.presentModal();
    });
  }

  // async presentModal() {
  //   const modal = await this.modalCtrl.create({
  //     component: SplashPage,
  //     enterAnimation: myEnterAnimation,
  //     leaveAnimation: myLeaveAnimation
  //   });
  //   return await modal.present();
  // }
}
