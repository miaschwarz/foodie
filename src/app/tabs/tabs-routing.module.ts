import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'maps',
        loadChildren: () => import('../maps/maps.module').then(m => m.mapsPageModule)
      },
      {
        path: 'search',
        loadChildren: () => import('../search/search.module').then(m => m.searchPageModule)
      },
      {
        path: 'saved',
        loadChildren: () => import('../saved/saved.module').then(m => m.savedPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      // {
      //   path: 'search-friends',
      //   loadChildren: () => import('../search-friends/search-friends.module').then(m => m.SearchFriendPageModule)
      // },
      {
        path: '',
        redirectTo: '/tabs/maps',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/maps',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
