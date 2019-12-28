import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';
import { RegisterUtdComponent } from './register-utd/register-utd.component';
import { RegisterUrfComponent } from './register-urf/register-urf.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  // {
  //   path:'',
  //   component:HomeComponent
  // },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'menu',
    component:MenuComponent
  },
  {
    path:'pipes',
    component:PipesComponent
  },
  {
    path:'signup',
    component:SignupComponent,
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
