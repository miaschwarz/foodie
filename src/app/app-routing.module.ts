import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'reviews',
    loadChildren: () => import('./reviews/reviews.module').then( m => m.reviewsPageModule)
  },
  {
    path: 'reviews/:fragment',
    loadChildren: () => import('./reviews/reviews.module').then( m => m.reviewsPageModule)
  },
  {
    path: 'info-page',
    loadChildren: () => import('./info-page/info-page.module').then( m => m.InfoPagePageModule)
  },
  {
    path: 'info-page/:fragment',
    loadChildren: () => import('./info-page/info-page.module').then( m => m.InfoPagePageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
