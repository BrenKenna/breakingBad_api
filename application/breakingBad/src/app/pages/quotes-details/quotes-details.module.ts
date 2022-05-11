import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuotesDetailsPageRoutingModule } from './quotes-details-routing.module';

import { QuotesDetailsPage } from './quotes-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuotesDetailsPageRoutingModule
  ],
  declarations: [QuotesDetailsPage]
})
export class QuotesDetailsPageModule {}
