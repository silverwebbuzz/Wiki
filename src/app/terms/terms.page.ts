import { Component, OnInit } from '@angular/core';
import { Constants } from '../interface/constants.models';
import { NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.page.html',
  styleUrls: ['./terms.page.scss'],
})
export class TermsPage implements OnInit {
  TermPage = null;
  constructor(private navCtrl: NavController,
    private statusBar: StatusBar) {

    let aboutUs = JSON.parse(window.localStorage.getItem(Constants.ALL_PAGES));

    this.TermPage = aboutUs.find(x=>{
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
