import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeathsDetailsPageRoutingModule } from './deaths-details-routing.module';

import { DeathsDetailsPage } from './deaths-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeathsDetailsPageRoutingModule
  ],
  declarations: [DeathsDetailsPage]
})
export class DeathsDetailsPageModule {}
