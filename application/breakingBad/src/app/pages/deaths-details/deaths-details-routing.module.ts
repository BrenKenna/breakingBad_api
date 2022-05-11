import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeathsDetailsPage } from './deaths-details.page';

const routes: Routes = [
  {
    path: '',
    component: DeathsDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeathsDetailsPageRoutingModule {}
