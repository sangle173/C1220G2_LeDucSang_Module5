import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CategoryComponent} from './category/category.component';
import {CategoryCreateComponent} from './category-create/category-create.component';
import {CategoryEditComponent} from './category-edit/category-edit.component';
import {CategoryDeleteComponent} from './category-delete/category-delete.component';


const routes: Routes = [
  {
    path: 'list',
    component: CategoryComponent
  },
  {
    path: 'create',
    component: CategoryCreateComponent
  },
  {
    path: 'edit/:id',
    component: CategoryEditComponent
  },
  {
    path: 'delete/:id',
    component: CategoryDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule {
}
