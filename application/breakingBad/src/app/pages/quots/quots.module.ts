import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuotsPageRoutingModule } from './quots-routing.module';

import { QuotsPage } from './quots.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuotsPageRoutingModule
  ],
  declarations: [QuotsPage]
})
export class QuotsPageModule {}
