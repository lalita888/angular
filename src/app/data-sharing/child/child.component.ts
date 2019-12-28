import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() title:string;
  @Output() childEvent = new EventEmitter();
  fb = new FormBuilder();
  user:any;
  constructor() { }

  ngOnInit() {
    
    this.user = this.fb.group({
      fname:['',[Validators.required]],
      lname:['',[Validators.required]]
    });

  }

  register(){
    // console.log(this.user.value);
    this.childEvent.emit(this.user.value);
    this.user.reset();
  }

}
