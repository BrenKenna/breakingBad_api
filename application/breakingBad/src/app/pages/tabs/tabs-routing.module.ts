import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [

  // Navigatable tabs
  {
  path: 'tabs',
    component: TabsPage,
    children: [

      {
        path: 'deaths',
        children: [
          {
            path: '',
            loadChildren: () => import('../deaths/deaths.module').then( m => m.DeathsPageModule)
          },

          {
            path: ':id',
            loadChildren: () => import('../deaths-details/deaths-details.module').then( m => m.DeathsDetailsPageModule)
          }
        ]
      },


      {
        path: 'episodes',
        children: [
          {
            path: '',
            loadChildren: () => import('../episodes/episodes.module').then( m => m.EpisodesPageModule)
          },

          {
          path: ':id',
          loadChildren: () => import('../episodes-details/episodes-details.module').then( m => m.EpisodesDetailsPageModule)
          }
        ]
      },


      {
        path: 'characters',
        children: [
          {
            path: '',
            loadChildren: () => import('../characters/characters.module').then( m => m.CharactersPageModule)
          },
          {
            path: ':id',
            loadChildren: () => import('../characters-details/characters-details.module').then( m => m.CharactersDetailsPageModule)
          }
        ]
      },


      {
        path: 'quotes',
        children: [
          {
            path: '',
            loadChildren: () => import('../quotes/quotes.module').then( m => m.QuotesPageModule)
          },
          {
            path: ':id',
            loadChildren: () => import('../quotes-details/quotes-details.module').then( m => m.QuotesDetailsPageModule)
          }
        ]
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
