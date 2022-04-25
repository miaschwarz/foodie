import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisitedPage } from './visited.page';

const routes: Routes = [
  {
    path: '',
    component: VisitedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitedPageRoutingModule { }
