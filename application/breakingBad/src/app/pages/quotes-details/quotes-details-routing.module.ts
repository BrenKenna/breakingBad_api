import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuotesDetailsPage } from './quotes-details.page';

const routes: Routes = [
  {
    path: '',
    component: QuotesDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuotesDetailsPageRoutingModule {}
