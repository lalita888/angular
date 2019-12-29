import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/services/employee.service';

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
  constructor(private _service:EmployeeService) { }

  ngOnInit() {
    this._service.getEmployees().subscribe(
      (res) => {
        console.log(res);
      }
    )
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
