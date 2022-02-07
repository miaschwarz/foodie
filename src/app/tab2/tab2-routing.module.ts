import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: tab2Page,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class tab2PageRoutingModule {}
