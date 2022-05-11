import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuotsPage } from './quots.page';

const routes: Routes = [
  {
    path: '',
    component: QuotsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuotsPageRoutingModule {}
