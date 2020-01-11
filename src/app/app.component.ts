import { Component } from '@angular/core';
import { EmployeeService } from './shared/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Anmol';
constructor(private _service:EmployeeService,private _router:Router){}
  logout(){
    this._service.logoutUser();
    this._router.navigate(['/']);
  }
}
