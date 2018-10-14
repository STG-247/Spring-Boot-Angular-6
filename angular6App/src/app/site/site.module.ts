import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { EmployeeSheetComponent } from './employee-sheet/employee-sheet.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ModalModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    SiteRoutingModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  declarations: [
    EmployeeSheetComponent,
    AddEmployeeComponent
  ],
  providers: [
  ],
  entryComponents: [
    AddEmployeeComponent
  ]

})
export class SiteModule { }
