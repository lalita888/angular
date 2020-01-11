import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './basic/page-not-found/page-not-found.component';
import { AuthGuard } from './shared/auth/auth.guard';
// import {CrudModule} from './crud/crud.module' 
const routes: Routes = [
  {
    path:'interaction',
    loadChildren:"./data-sharing/data-sharing.module#DataSharingModule",
    canActivate:[AuthGuard]
  },
  {
    path:'employeeList',
    loadChildren:"./crud/crud.module#CrudModule",
    canActivate:[AuthGuard]
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
