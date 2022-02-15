import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { reviewsPage } from './reviews.page';

const routes: Routes = [
  {
    path: '',
    component: reviewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class reviewsPageRoutingModule {}
