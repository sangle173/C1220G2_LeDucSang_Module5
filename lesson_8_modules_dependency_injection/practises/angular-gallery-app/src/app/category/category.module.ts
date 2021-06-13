import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category/category.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryDeleteComponent } from './category-delete/category-delete.component';


@NgModule({
  declarations: [CategoryComponent, CategoryCreateComponent, CategoryEditComponent, CategoryDeleteComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    ReactiveFormsModule
  ]
})
export class CategoryModule { }
