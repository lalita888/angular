import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';
import { Login } from '../models/Login';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  baseURL:string = "http://localhost:3000/employee";
  loginURL:string = "http://localhost:3000/login";
  constructor(private _http:HttpClient) { }

  getEmployees(){
    return this._http.get<Employee[]>(this.baseURL);
  }

  getSingleEmployee(id:number){
    const apiURL = `${this.baseURL}/${id}`;
    return this._http.get<Employee>(apiURL);
  }
  postEmployee(emp:Employee){
    return this._http.post(this.baseURL,emp);
  }
  putEmployee(emp:Employee){
    const apiURL = `${this.baseURL}/${emp.id}`;
    return this._http.put(apiURL,emp);
  }
  deleteEmployee(id:number){
    const apiURL = `${this.baseURL}/${id}`;
    return this._http.delete(apiURL);
  }
  
  getUserLogins(){
    return this._http.get<Login[]>(this.loginURL);
  }

  logoutUser(){
    return sessionStorage.clear();
  }

}
