import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DictionaryDetailComponent} from './dictionary-detail/dictionary-detail.component';
import {DictionarySearchComponent} from './dictionary-search/dictionary-search.component';


const routes: Routes = [
  {
    path: 'dictionary/details/:inputword',
    component: DictionaryDetailComponent
  },
  {
    path: 'dictionary/list',
    component: DictionarySearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
