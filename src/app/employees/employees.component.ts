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
        display: 'block',
        'z-index': '2',
      })),
      state('not-loading', style({
        display: 'none',
        'z-index': '0',
        transform: 'none',
      })),
      transition('void => loading', [
        animate('0.2s', keyframes([
          style({ transform: 'rotate(180)'}),
          style({ transform: 'rotate(360)'})
        ]))
      ]),
    ])
  ],
})
export class EmployeesComponent implements OnInit {

  employees$: object;
  loadingTrigger = true;

  constructor(private employeeService: EmployeesService) { }

  ngOnInit() {
    this.employees$ = this.employeeService.getEmployees();
    // this.loadingTrigger = false;
  }

}
