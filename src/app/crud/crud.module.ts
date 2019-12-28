import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { EmployeesComponent } from './employees/employees.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [EmployeesComponent, AddComponent, EditComponent],
  imports: [
    CommonModule,
    CrudRoutingModule
  ],
  exports: [EmployeesComponent, AddComponent, EditComponent]
})
export class CrudModule { }
