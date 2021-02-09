import { Component, OnInit, Inject } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ApiService } from '../services/api.service';
import { CommonService } from '../services/common.service';
import { APP_CONFIG, AppConfig } from '../app.config';

@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {
  isLoaded = false;
  Team = null;
  profileURL = this.config.teamURL;
  sliderOptions = {
    zoom: false,
    slidesPerView: 1.2,
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

  constructor(@Inject(APP_CONFIG) private config:AppConfig, private navCtrl: NavController,
    private service: ApiService,
    private common: CommonService,
    private statusBar: StatusBar) {
        this.service.getTeamMembers().subscribe(val=>{
          this.isLoaded = true;
          if(val.status){
            this.Team = val.team_data;
          }else{
            this.common.presentToastWithOptions(val.message);
          }
        },(err)=>{
          this.isLoaded = false;
          this.common.presentToastWithOptions('Server Problem, Please try again.');
          console.log('Upload Err:',err);
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
