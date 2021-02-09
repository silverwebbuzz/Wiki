import { Component, OnInit, Inject } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from '../services/api.service';
import { CommonService } from '../services/common.service';
import { AuthenticationService } from '../services/authentication.service';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Constants } from '../interface/constants.models';
import { APP_CONFIG, AppConfig } from '../app.config';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  isLoaded= false;
  allNews = [];
  constructor(@Inject(APP_CONFIG) private config:AppConfig,
    private service:ApiService,
    private common: CommonService,
    private auth: AuthenticationService,
    private router: Router,
    private navCtrl: NavController,
    private sanitizer: DomSanitizer,
    private statusBar: StatusBar) { }

  ngOnInit() {
  }

  getNews(event?){
    this.service.getNews().subscribe(val =>{
      this.isLoaded = true;
          if(val.status){
            this.allNews = val.news_list;
            window.localStorage.setItem(Constants.ALL_NEWS, JSON.stringify(this.allNews));
          }else{
            //this.common.presentToastWithOptions(val.message);
          }
          if(event){
            event.target.complete();
          }
    },(err)=>{
      this.isLoaded = false;
      if(event){
        event.target.complete();
      }
      if(this.common.isLoading){
        this.common.dismissLoading();
      }
      this.common.presentToastWithOptions('Server Problem, Please try again.');
      console.log('Upload Err:',err);
    });
    
  }

  ionViewWillEnter() {
    this.getNews();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#f1f1f1');
  }

  gotoNewDetails(news){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        news: JSON.stringify(news)
      }
    };
    this.router.navigate(['/newsdetails'], navigationExtras);
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

  refreshNews(event){
    this.getNews(event);
  }

  back(){
    this.navCtrl.pop();
  }

}
