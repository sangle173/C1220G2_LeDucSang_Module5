import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import { ContractCreateComponent } from './contract-create/contract-create.component';
import { ContractListComponent } from './contract-list/contract-list.component';
import { ContractUpdateComponent } from './contract-update/contract-update.component';
import { ContractDeleteComponent } from './contract-delete/contract-delete.component';


@NgModule({
  declarations: [ContractCreateComponent, ContractListComponent, ContractUpdateComponent, ContractDeleteComponent],
  imports: [
    CommonModule,
    ContractRoutingModule
  ]
})
export class ContractModule { }
