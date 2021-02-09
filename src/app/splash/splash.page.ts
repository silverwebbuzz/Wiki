import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(private navCtrl: NavController,
    public modalCtrl: ModalController, 
    public splashScreen: SplashScreen,
    private menu: MenuController) { 
      
      //this.menu.enable(false);
    }

    ionViewDidEnter() {

      this.splashScreen.hide();
  
      setTimeout(() => {
        this.modalCtrl.dismiss();
      }, 4000);
  
    }

  ngOnInit() {
  }

  back(){
    this.navCtrl.pop();
  }

}
