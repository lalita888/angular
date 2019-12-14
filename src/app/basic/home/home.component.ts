import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imgName:string = "Koala";
  imgPath:string = "../../../assets/images/Koala.jpg";
  toggle:boolean = false;
  order:string = "Empty";
  constructor() { }

  ngOnInit() {
  }

  changeImage(){
    this.toggle = !this.toggle;
    if(this.toggle){
      this.imgName = "Tulips";
      this.imgPath = "../../../assets/images/Tulips.jpg";
    }else{
      this.imgName = "Koala";
      this.imgPath = "../../../assets/images/Koala.jpg";
    }
  }

}
