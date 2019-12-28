import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataSharingRoutingModule } from './data-sharing-routing.module';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ParentComponent, ChildComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DataSharingRoutingModule
  ],
  exports: [ParentComponent, ChildComponent]
})
export class DataSharingModule { }
