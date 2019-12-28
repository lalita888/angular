import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  message:string = "Good morning";

  person:object = {
    fname:'Sonu',
    lname:'chandan',
    city:'pune'
  }
  today: Date;

  constructor() { }

  ngOnInit() {
    this.today = new Date();
  }

}
