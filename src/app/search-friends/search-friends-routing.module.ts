import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchFriendPage } from './search-friends.page';

const routes: Routes = [
  {
    path: '',
    component: SearchFriendPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchFriendPageRoutingModule { }
