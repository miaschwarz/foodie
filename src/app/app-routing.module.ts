import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'reviews',
    loadChildren: () => import('./reviews/reviews.module').then(m => m.reviewsPageModule)
  },
  {
    path: 'reviews/:key',
    loadChildren: () => import('./reviews/reviews.module').then(m => m.reviewsPageModule)
  },
  {
    path: 'info-page',
    loadChildren: () => import('./info-page/info-page.module').then(m => m.InfoPagePageModule)
  },
  {
    path: 'info-page/:key',
    loadChildren: () => import('./info-page/info-page.module').then(m => m.InfoPagePageModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./favorites/favorites.module').then(m => m.favoritesPageModule)
  },
  {
    path: 'friend/:email',
    loadChildren: () => import('./friend/friend.module').then(m => m.FriendPageModule)
  },
  {
    path: 'search-friends',
    loadChildren: () => import('./search-friends/search-friends.module').then(m => m.SearchFriendPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
