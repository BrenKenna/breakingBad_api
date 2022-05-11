import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuotsDetailsPage } from './quots-details.page';

const routes: Routes = [
  {
    path: '',
    component: QuotsDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuotsDetailsPageRoutingModule {}
