import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BangtinRoutingModule } from './bangtin-routing.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import {ReactiveFormsModule} from '@angular/forms';
import { SearchPipe } from './search.pipe';


@NgModule({
  declarations: [ListComponent, CreateComponent, ViewComponent, SearchPipe],
    imports: [
        CommonModule,
        BangtinRoutingModule,
        ReactiveFormsModule
    ]
})
export class BangtinModule { }
