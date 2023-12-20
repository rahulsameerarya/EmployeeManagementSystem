import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ServicesService } from '../EmployeeService/services.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {

  employees:Employee[]=[];
  constructor(private employeeService:ServicesService){}
  ngOnInit():void{
  /*this.employees=[{
    "id":1,
    "firstName":"Rahul",
    "lastName":"Arya",
    "emailId":"rahulsamir0@gmail.com"
  },
  {
    "id":2,
    "firstName":"John",
    "lastName":"Cena",
    "emailId":"cena@gmail.com"
  }]  */
  this.getEmployees();
  }
  private getEmployees(){
    this.employeeService.getEmployeeList().subscribe(data=>{
      this.employees=data;
    })
  }
 
}
