import { Component, OnInit, Inject } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { APP_CONFIG, AppConfig } from '../app.config';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { File } from "@ionic-native/file/ngx";
import { FileTransfer, FileTransferObject } from "@ionic-native/file-transfer/ngx";
import { FileOpener } from "@ionic-native/file-opener/ngx";
import { CommonService } from '../services/common.service';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.page.html',
  styleUrls: ['./preview.page.scss'],
})
export class PreviewPage implements OnInit {
  data: any = [];
  
  fileImage = '';
  fileTransfer: FileTransferObject;
  documentURL = this.config.documentURL;
  constructor(@Inject(APP_CONFIG) private config:AppConfig, private navCtrl: NavController,
    private route: ActivatedRoute,
    private document: DocumentViewer,
    private fileOpener: FileOpener,
    private common:CommonService,
    private transfer: FileTransfer,
    private file: File,
    private router: Router,
    private statusBar: StatusBar) {

    this.route.queryParams.subscribe(params => {
      if (params && params.resume) {
        this.data = JSON.parse(params.resume);
      }

      if(this.data.file_type == 'application/pdf'){
        this.fileImage = '../../assets/img/pdf.png';
      }else if(this.data.file_type == 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || this.data.file_type == 'application/msword'){
        this.fileImage = '../../assets/img/docx.png';
      }else{
        this.fileImage = '../../assets/img/sample.png';
      }
      console.log(this.data);
    });
   }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#f1f1f1');
  }

  OpenDocuments(){
    // const options: DocumentViewerOptions = {
    //   title: 'My File'
    // }
    const url = this.documentURL + this.data.resume;
    const fileType = this.data.file_type;
    const fileName = this.data.resume.split('/');
    this.fileTransfer = this.transfer.create();
    this.fileTransfer
      .download(url, this.file.dataDirectory + fileName[1])
      .then(entry => {
        console.log("download complete: " + entry.toURL());
        this.fileOpener
          .open(entry.toURL(), fileType)
          .then(() => console.log("File is opened"))
          .catch(e => {console.log("Error opening file", e); this.common.presentToastWithOptions('Viewer Not found.');});
      });
    // this.document.viewDocument(url, fileType, options);
  }
  back(){
    this.router.navigate(['/home']);
  } 

}
