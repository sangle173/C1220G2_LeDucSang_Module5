import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routerConfig: Routes = [
  {path: 'customers', component: CreateCustomerComponent, data: {title: 'Customer Manager'}},
  {path: 'employees', component: CreateEmployeeComponent},
  {path: 'services', component: ServiceComponent},
  {path: 'contracts', component: CreateContractComponent},
  {path: '', component: MainComponent}
];
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {CreateCustomerComponent} from './create-customer/create-customer.component';
import {CreateEmployeeComponent} from './create-employee/create-employee.component';
import {ServiceComponent} from './create-service/service.component';
import {CreateContractComponent} from './create-contract/create-contract.component';
import {CreateContractDetailsComponent} from './create-contract-details/create-contract-details.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {PageingComponent} from './pageing/pageing.component';
import {ROUTES} from '@angular/router';
import {MainComponent} from './main/main.component';
import {BootstrapIconsModule} from 'ng-bootstrap-icons';
import {allIcons} from 'ng-bootstrap-icons/icons';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CreateCustomerComponent,
    CreateEmployeeComponent,
    ServiceComponent,
    CreateContractComponent,
    CreateContractDetailsComponent,
    PageingComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(routerConfig),
    BootstrapIconsModule.pick(allIcons)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    BootstrapIconsModule
  ]
})
export class AppModule {
}
