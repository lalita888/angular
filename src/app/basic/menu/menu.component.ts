import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  twoWheeler:string[];
  fourWheeler:string[];
  priceList:number[];
  isTwoWheeler:boolean = true;
  selectedItem:string = '';
  currentClass:string;
  isClass:boolean = true;
  myStyle:object;
  isStyle:boolean = true;
  constructor() { }

  ngOnInit() {
    this.twoWheeler = ['gixxer','shine','activa','vespa'];
    this.fourWheeler = ['audi','bmw','ford'];
    this.priceList = [103000,70000,65000,102000,5000000,6000000,2000000];
    this.currentClass = "active-head";
    this.myStyle = {
      'color':'green',
      'font-weight':'bold'
    }
  }

  showTwoWheeler(){
    this.isTwoWheeler =true;
  }

  showFourWheeler(){
    this.isTwoWheeler =false;
  }

  selectVehicle(vehicle:string){
    this.selectedItem = vehicle;
  }

  changeClass(){
    this.isClass = !this.isClass;
  }

  changeStyle(){
    this.isStyle = !this.isStyle;
    this.myStyle = {
      'color':this.isStyle ? 'green' : 'red',
      'font-weight':this.isStyle ? 'bold' : 'normal'
    }
  }

}
