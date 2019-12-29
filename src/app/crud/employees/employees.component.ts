import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { Employee } from 'src/app/shared/models/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: Employee[] = [];
  constructor(private _service: EmployeeService) { }

  ngOnInit() {
    this.fetchEmployees();
  }

  fetchEmployees() {
    this._service.getEmployees().subscribe(res => {
      this.employees = res.map((emp, index) => {
        return ({ ...emp, position: index + 1 })
      });
      console.log(this.employees);
    });
  }

  deleteEmp(emp: Employee) {
    if (confirm("Are you sure to delete "+emp.name+"?")) {
      this._service.deleteEmployee(emp.id).toPromise().then(
        () => {
          this.fetchEmployees();
        }
      )
    }
  }

}
