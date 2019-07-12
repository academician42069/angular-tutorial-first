import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.scss']
})
export class EmployeeRegisterComponent implements OnInit {

  checkedForm;

  constructor(
      private employeeService: EmployeesService,
      private formBuilder: FormBuilder
    ) {
    this.checkedForm = formBuilder.group({
      name: [''],
      salary: [''],
      age: [''],
    });
  }

  onSubmit(value) {
    this.employeeService.register(value).subscribe((smth) => console.log(smth));
  }

  ngOnInit() {
  }

}
