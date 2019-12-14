import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BasicRoutingModule } from './basic-routing.module';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { HoverDirective } from './hover.directive';

@NgModule({
  declarations: [HomeComponent, MenuComponent, HoverDirective],
  imports: [
    CommonModule,
    FormsModule,
    BasicRoutingModule
  ],
  exports: [HomeComponent, MenuComponent]
})
export class BasicModule { }
