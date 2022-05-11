import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuotsDetailsPageRoutingModule } from './quots-details-routing.module';

import { QuotsDetailsPage } from './quots-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuotsDetailsPageRoutingModule
  ],
  declarations: [QuotsDetailsPage]
})
export class QuotsDetailsPageModule {}
