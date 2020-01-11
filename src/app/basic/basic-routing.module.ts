import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';
import { RegisterUtdComponent } from './register-utd/register-utd.component';
import { RegisterUrfComponent } from './register-urf/register-urf.component';
import { PipesComponent } from './pipes/pipes.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../shared/auth/auth.guard';

const routes: Routes = [
  // {
  //   path:'',
  //   redirectTo:'login',
  //   pathMatch:'full'
  // },
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'home',
    component:HomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'menu',
    component:MenuComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'pipes',
    component:PipesComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'signup',
    component:SignupComponent,
    canActivate:[AuthGuard],
    children:[
      {
        path:'',
        redirectTo:'register-utd',
        pathMatch:'full'
      },
      {
        path:'register-utd',
        component:RegisterUtdComponent
      },
      {
        path:'register-urf',
        component:RegisterUrfComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicRoutingModule { }
