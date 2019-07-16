import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { animate, keyframes, state, style, trigger, transition } from '@angular/animations';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  animations: [
    trigger('loadingTrigger', [
      state('loading', style({
        color: '#FFFFFF'
      })),
      state('notloading', style({
        display: 'none',
      })),
      transition('void => loading', [
        animate('0.5s', keyframes([
          style({ 'background-color': '#1976D2', offset: 0}),
          style({ 'background-color': '#999999', offset: 1})
        ]))
      ]),
      transition('loading => notloading', [
        animate('100ms')
      ])
    ]),
  ],
})
export class EmployeesComponent implements OnInit {

  employees$: object;
  isAnimated = true;

  constructor(private employeeService: EmployeesService) {
    this.isAnimated = false;
  }

  ngOnInit() {
    this.isAnimated = true;
    this.employees$ = this.employeeService.getEmployees();
    setTimeout(() => {this.isAnimated = false; }, 500);
  }

}
