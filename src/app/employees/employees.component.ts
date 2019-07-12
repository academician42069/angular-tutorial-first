import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employees$: object;

  constructor(private employeeService: EmployeesService) { }

  ngOnInit() {
    this.employees$ = this.employeeService.getEmployees();
  }

}
