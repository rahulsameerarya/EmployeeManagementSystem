import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ServicesService } from '../EmployeeService/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent implements OnInit {
  employee:Employee=new Employee();
  constructor(private employeeService:ServicesService,private router:Router){}
  ngOnInit(): void {
  }
  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(data=>{
      console.log(data);
      this.goToEmployeeList();
    },
    error=>console.log(error));
  }
  goToEmployeeList(){
    this.router.navigate([`/employees`]);
  }
  onSubmit(){
   console.log(this.employee);
   this.saveEmployee();
  }
}
