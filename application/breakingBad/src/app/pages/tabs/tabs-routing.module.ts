import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [

  // Navigatable tables
  {
  path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'deaths',
        loadChildren: () => import('../deaths/deaths.module').then( m => m.DeathsPageModule)
      },
      {
        path: 'deaths-details',
        loadChildren: () => import('../deaths-details/deaths-details.module').then( m => m.DeathsDetailsPageModule)
      },
      {
        path: 'episodes',
        loadChildren: () => import('../episodes/episodes.module').then( m => m.EpisodesPageModule)
      },
      {
        path: 'episodes-details',
        loadChildren: () => import('../episodes-details/episodes-details.module').then( m => m.EpisodesDetailsPageModule)
      },
      {
        path: 'characters',
        loadChildren: () => import('../characters/characters.module').then( m => m.CharactersPageModule)
      },
      {
        path: 'characters-details',
        loadChildren: () => import('../characters-details/characters-details.module').then( m => m.CharactersDetailsPageModule)
      },
      {
        path: 'tabs',
        loadChildren: () => import('../tabs/tabs.module').then( m => m.TabsPageModule)
      },
      {
        path: 'quotes',
        loadChildren: () => import('../quotes/quotes.module').then( m => m.QuotesPageModule)
      },
      {
        path: 'quotes-details',
        loadChildren: () => import('../quotes-details/quotes-details.module').then( m => m.QuotesDetailsPageModule)
      }
    ]
  },

  // Landing page basically
  {
    path: '',
    redirectTo: '/tabs/episodes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
