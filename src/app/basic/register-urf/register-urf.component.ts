import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-urf',
  templateUrl: './register-urf.component.html',
  styleUrls: ['./register-urf.component.css']
})
export class RegisterUrfComponent implements OnInit {
  cities:string[] = ['pune','mumbai','bangaluru','nagpur','Goa'];
  user:FormGroup;
  constructor() { }

  ngOnInit() {
    this.user = new FormGroup({
      uname:new FormControl('a',[Validators.required,Validators.pattern(/[a-zA-Z ]+/)]),
      gender:new FormControl('',[Validators.required]),
      city:new FormControl('',[Validators.required]),
      terms:new FormControl(false,[Validators.required])
    })
  }

  register(){
    console.log(this.user.value);
  }

  getNameErrors(){
    return this.user.controls['uname'].errors.required ? "Name Required" :
      this.user.controls['uname'].errors.pattern ? "Name should be a character" : "";
  }
}
