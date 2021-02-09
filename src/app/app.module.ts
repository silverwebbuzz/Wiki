import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SplashPage } from './splash/splash.page';
import { SplashPageModule } from './splash/splash.module';
import { BaseAppConfig, APP_CONFIG } from './app.config';
import { HttpClientModule } from '@angular/common/http';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { File } from "@ionic-native/file/ngx";
import { FileTransfer } from "@ionic-native/file-transfer/ngx";
import { FileOpener } from "@ionic-native/file-opener/ngx";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [SplashPage],
  imports: [BrowserModule, 
    IonicModule.forRoot({mode:"ios"}), 
    AppRoutingModule, 
    SplashPageModule,
    HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    DocumentViewer,
    File,
    FileOpener,
    FileTransfer,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide: APP_CONFIG, useValue: BaseAppConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
