import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  formTitle:string = "Add Student";
  students:string[] = [];
  data = [];
  constructor() { }

  ngOnInit() {
  }

  addStudent(std){
    
    this.data.push(std);
    this.students = this.data.map( std => std.fname+" "+std.lname);
    // this.students.push(std);
    console.log(this.students);
  }

}
