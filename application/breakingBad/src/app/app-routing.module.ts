import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'deaths',
    loadChildren: () => import('./pages/deaths/deaths.module').then( m => m.DeathsPageModule)
  },
  {
    path: 'deaths-details',
    loadChildren: () => import('./pages/deaths-details/deaths-details.module').then( m => m.DeathsDetailsPageModule)
  },
  {
    path: 'episodes',
    loadChildren: () => import('./pages/episodes/episodes.module').then( m => m.EpisodesPageModule)
  },
  {
    path: 'episodes-details',
    loadChildren: () => import('./pages/episodes-details/episodes-details.module').then( m => m.EpisodesDetailsPageModule)
  },
  {
    path: 'characters',
    loadChildren: () => import('./pages/characters/characters.module').then( m => m.CharactersPageModule)
  },
  {
    path: 'characters-details',
    loadChildren: () => import('./pages/characters-details/characters-details.module').then( m => m.CharactersDetailsPageModule)
  },
  {
    path: 'quots',
    loadChildren: () => import('./pages/quots/quots.module').then( m => m.QuotsPageModule)
  },
  {
    path: 'quots-details',
    loadChildren: () => import('./pages/quots-details/quots-details.module').then( m => m.QuotsDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
