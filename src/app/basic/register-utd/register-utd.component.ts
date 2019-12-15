import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-register-utd',
  templateUrl: './register-utd.component.html',
  styleUrls: ['./register-utd.component.css']
})
export class RegisterUtdComponent implements OnInit {

  cities:string[] = ['pune','mumbai','bangaluru','nagpur','Goa'];
  user:User;
  constructor() { }

  ngOnInit() {
  }

  register(frm:User){
    this.user = frm;
    console.log(this.user);
  }

}
