import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  heading:string = "List of Students";
  @Input() title: string;
  @Output() childEvent = new EventEmitter();
  fb = new FormBuilder();
  user: any;
  constructor() { }

  ngOnChanges() {
    console.log('ngOnChanges called')
  }

  ngOnInit() {
    this.user = this.fb.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]]
    });
    console.log('ngOnInit called')
  }

  ngDoCheck() {
    console.log('ngDoCheck called')
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called')
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called')
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called')
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called')
  }
  register() {
    // console.log(this.user.value);
    this.childEvent.emit(this.user.value);
    this.user.reset();
  }

}
