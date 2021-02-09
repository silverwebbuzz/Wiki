import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NavParams, ModalController, NavController, MenuController } from '@ionic/angular';
import { HomePage } from '../home/home.page';
import { Constants } from '../interface/constants.models';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  AboutPage = null;
  
  constructor(private navCtrl: NavController,
    private statusBar: StatusBar){
    
    let aboutUs = JSON.parse(window.localStorage.getItem(Constants.ALL_PAGES));

    this.AboutPage = aboutUs.find(x=>{
      x.page_id == 1; return x;
    });
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
