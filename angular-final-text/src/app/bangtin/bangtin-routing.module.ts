import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ViewComponent} from './view/view.component';
import {ListComponent} from './list/list.component';
import {CreateComponent} from './create/create.component';


const routes: Routes = [
  {
    path: 'danhsach',
    component: ListComponent,
  },
  {
    path: 'taomoi',
    component: CreateComponent
  },
  {
    path: 'chitiet/:id',
    component: ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BangtinRoutingModule {
}
