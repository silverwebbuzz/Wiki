import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { NavController, IonSlides } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Constants } from '../interface/constants.models';
import { AppConfig, APP_CONFIG } from '../app.config';

@Component({
  selector: 'app-zoomslider',
  templateUrl: './zoomslider.page.html',
  styleUrls: ['./zoomslider.page.scss'],
})
export class ZoomsliderPage implements OnInit {
  @ViewChild('Slides_banner') slider: IonSlides;
  allImgs = [];
  ImgURL = this.config.newsURL;
  current_slider_index = 0;
  sliderOptions = {
    zoom: true,
    slidesPerView: 1,
    effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    },
    pagination: {
      el: '.swiper-pagination',
    }
  };

  constructor(@Inject(APP_CONFIG) private config:AppConfig,private navCtrl: NavController,private acrouter: ActivatedRoute,private statusBar: StatusBar) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.acrouter.queryParams.subscribe(params=>{
      if(params && params.allImgs){
        this.allImgs = JSON.parse(params.allImgs);
        this.current_slider_index = 1;
      }
    });
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#f1f1f1');
  }

  SlideDidChange(){
    this.slider.getActiveIndex().then(
      (index)=>{
        this.current_slider_index = (index + 1);
     });
    //this.slider_thumb.slideTo(i + 1);
  }

  back(){
    this.navCtrl.pop();
  }

}
