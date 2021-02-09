import { Component, OnInit, Inject } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Constants } from '../interface/constants.models';
import { APP_CONFIG, AppConfig } from '../app.config';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.page.html',
  styleUrls: ['./userprofile.page.scss'],
})
export class UserprofilePage implements OnInit {

  userDetails = [];
  profileImgURL = this.config.profileURL;
  coverImgURL = this.config.coverURL;
  constructor(@Inject(APP_CONFIG) private config:AppConfig ,private navCtrl: NavController, private statusBar:StatusBar) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#f1f1f1');
    this.userDetails = JSON.parse(window.localStorage.getItem(Constants.USER_DETAILS));
    console.log('user:',this.userDetails);
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#f1f1f1');
  }

  back(){
    this.navCtrl.pop();
  } 

}
