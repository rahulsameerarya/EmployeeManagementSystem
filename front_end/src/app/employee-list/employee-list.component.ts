import { Component,OnInit } from '@angular/core';
import { Employee } from '../employee';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[]=[];

  constructor() {
  }

  ngOnInit():void{
    this.employees=[{
      "id":1,
      "firstName":"Rahul",
      "lastName":"Fadatare",
      "emailId":"rahul@gmail.com"
    },
    {
      "id":2,
      "firstName":"John",
      "lastName":"Cena",
      "emailId":"cena@gmail.com"
    }
  ]

  }



}
