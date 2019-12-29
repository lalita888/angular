import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  fb = new FormBuilder();
  employee = this.fb.group({
    name:[''],
    gender:[''],
    city:[''],
    terms:[false]
  })
  cities:string[] = ["osmanabad","nashik","pune","ahmadnagar"];

  constructor(private _service:EmployeeService) { }

  ngOnInit() {
  }

  register(){

    this._service.postEmployee(this.employee.value).subscribe(
      () => {
        alert("Added Successfully");
        this.employee.reset();
      }
    )
    // console.log(this.employee.value);
    // this.employee.reset();
  }

}
