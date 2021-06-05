import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { ServiceComponent } from './create-service/service.component';
import { CreateContractComponent } from './create-contract/create-contract.component';
import { CreateContractDetailsComponent } from './create-contract-details/create-contract-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { PageingComponent } from './pageing/pageing.component';

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
    PageingComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MDBBootstrapModule.forRoot(),
        BrowserAnimationsModule,
        NgbModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
