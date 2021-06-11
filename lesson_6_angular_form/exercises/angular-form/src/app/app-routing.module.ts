import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SigninComponent} from './login/signin.component';
import {MyRegisterPageComponent} from './my-register-page/my-register-page.component';


const routes: Routes = [
  {path: 'login', component: SigninComponent},
  {path: 'register', component: MyRegisterPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
