import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BasicRoutingModule } from './basic-routing.module';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { HoverDirective } from './hover.directive';
import { SignupComponent } from './signup/signup.component';
import { RegisterUtdComponent } from './register-utd/register-utd.component';
import { RegisterUrfComponent } from './register-urf/register-urf.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PipesComponent } from './pipes/pipes.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [HomeComponent, MenuComponent, HoverDirective, SignupComponent, RegisterUtdComponent, RegisterUrfComponent, PageNotFoundComponent, PipesComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BasicRoutingModule
  ],
  exports: [HomeComponent, MenuComponent, HoverDirective, SignupComponent, RegisterUtdComponent, RegisterUrfComponent, PageNotFoundComponent, PipesComponent, LoginComponent],
})
export class BasicModule { }
