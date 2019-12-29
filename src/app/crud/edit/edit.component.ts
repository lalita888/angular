import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  cities: string[] = ["osmanabad", "nashik", "pune", "ahmadnagar"];
  id: number;
  fb = new FormBuilder();
  employee = this.fb.group({
    id: [],
    name: [''],
    gender: [''],
    city: [''],
    terms: [false]
  })
  constructor(private _route: ActivatedRoute, private _router: Router, private _service: EmployeeService) { }

  ngOnInit() {
    this._route.paramMap.subscribe(params => this.id = parseInt(params.get('id')));
    this._service.getSingleEmployee(this.id).subscribe(
      res => {
        this.employee.setValue({
          ...res
        })
      }
    )
  }

  editEmployee() {
    this._service.putEmployee(this.employee.value).subscribe(
      () => {
        alert("Updated Successfully");
        this._router.navigate(['/employeeList']);
      }
    )
    // console.log(this.employee.value);
  }

}
