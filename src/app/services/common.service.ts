import { Injectable } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  toast: any;
  isLoading = false;
  constructor(private toastCtrl: ToastController,
    private loadingController: LoadingController) { }

  async presentToastWithOptions(message?, cssClass?, position?) {
    if(this.toast){
      this.toast.dismiss();
    }
    this.toast = await this.toastCtrl.create({
      message: message ? message : null,
      duration: 10000,
      position: position ? position : 'bottom',
      cssClass: cssClass ? cssClass : 'dark-trans login-toster',
      closeButtonText: 'OK',
      showCloseButton: true
    });
    this.toast.present();
  }

  async presentToastOptionsWithOutClose(message?, position?) {
    if(this.toast){
      this.toast.dismiss();
    }
    this.toast = await this.toastCtrl.create({
      message: message ? message : null,
      duration: 5000,
      position: position ? position : 'bottom',
      cssClass: 'dark-trans',
      showCloseButton: false
    });
    this.toast.present();
  }

  async presentLoading() {
    this.isLoading = true;
    return await this.loadingController.create({
      message: 'Please wait...',
      translucent: true,
      spinner: 'crescent',
      cssClass: 'custom-class custom-loading'
    }).then(a => {
      a.present().then(() => {
        if (!this.isLoading) {
          a.dismiss();
        }
      });
    });
  }

  async dismissLoading(){
    this.isLoading = false;
    return await this.loadingController.dismiss();
  }
}
