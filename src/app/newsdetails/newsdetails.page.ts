import { Component, OnInit, Inject } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import * as _ from 'lodash';
import { APP_CONFIG, AppConfig } from '../app.config';
import { Constants } from '../interface/constants.models';
import { DomSanitizer } from '@angular/platform-browser';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-newsdetails',
  templateUrl: './newsdetails.page.html',
  styleUrls: ['./newsdetails.page.scss'],
})
export class NewsdetailsPage implements OnInit {
  newsDetails: any;
  ImgURL = this.config.newsURL;
  RandomNews = [];
  allImgs = [];
  sliderOptions = {
    zoom: false,
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

  constructor(@Inject(APP_CONFIG) private config:AppConfig,
    private navCtrl: NavController,
    private router: Router,
    private sanitizer: DomSanitizer,
    private acrouter: ActivatedRoute,
    private statusBar: StatusBar) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.acrouter.queryParams.subscribe(params=>{
      if(params && params.news){
        this.newsDetails = JSON.parse(params.news);
        if(this.newsDetails.image){
          this.allImgs = this.newsDetails.image.split(',');
        }
        let newsArray = JSON.parse(window.localStorage.getItem(Constants.ALL_NEWS));
        let filterNewArray = newsArray.filter(val=>{let x = val.news_id !=this.newsDetails.news_id; return x;});

        this.RandomNews = _.sample(filterNewArray);
      }else{
        this.router.navigateByUrl('home');
      }
    });
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#f1f1f1');
  }
  getNewsImg(news){
    //console.log('news:',news);
    var img_url;
    if(news.image){
      let img = news.image;
      let imgArray = img.split(',');
      img_url = this.config.newsURL + imgArray[0];
    }else{
      img_url = '../../assets/img/no-img.png';
    }
    const sanitizedContent = this.sanitizer.bypassSecurityTrustUrl(img_url);
    return sanitizedContent;
  }

  zoomSlider(allImgs){
    console.log(allImgs);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        allImgs: JSON.stringify(allImgs)
      }
    };
    this.router.navigate(['/zoomslider'], navigationExtras);
  }

  gotoNewDetails(news){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        news: JSON.stringify(news)
      }
    };
    this.router.navigate(['/newsdetails'], navigationExtras);
  }

  back(){
    this.navCtrl.pop();
  }

}
