import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './basic/page-not-found/page-not-found.component';
// import {CrudModule} from './crud/crud.module' 
const routes: Routes = [
  {
    path:'interaction',
    loadChildren:"./data-sharing/data-sharing.module#DataSharingModule"
  },
  {
    path:'employeeList',
    loadChildren:"./crud/crud.module#CrudModule"
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
