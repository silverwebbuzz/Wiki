import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ZoomsliderPage } from './zoomslider.page';

const routes: Routes = [
  {
    path: '',
    component: ZoomsliderPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ZoomsliderPage]
})
export class ZoomsliderPageModule {}
