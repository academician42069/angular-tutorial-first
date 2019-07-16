import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { animate, state, style, trigger, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  animations: [
    trigger('modalTrigger', [
      state('popout', style({
        height: '40%',
        opacity: 1,
      })),
      state('hidden', style({
        height: '0%',
        opacity: 0,
      })),
      transition('hidden <=> popout', [
        animate('300ms')
      ])
    ])
  ]
})
export class EmployeeComponent implements OnInit {

  id;
  private deleteConfirm = false;
  employee$;
  private updating = false;
  updateForm;
  animated = false;

  constructor(
    private employeesService: EmployeesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {
    this.updateForm = this.formBuilder.group({
      name: [''],
      salary: [''],
      age: [''],
    });
  }

  initUpdate() {
    this.updating = true;
  }

  update(newData) {
    newData.id = this.id;
    this.employeesService.update(this.id, newData).subscribe();
    window.alert('Employee successfully updated');
    this.updating = false;
  }

  get updateStatus() {
    return this.updating;
  }

  deleteThisEmployee() {
    this.animated = true;
    if (this.deleteConfirm) {
      this.employeesService.delete(this.id).subscribe();
      window.alert('Employee removed');
      this.animated = false;
      this.router.navigate(['/employees']);
    }
  }

  confirmDelete() {
    this.deleteConfirm = true;
    this.deleteThisEmployee();
  }

  hide() {
    this.animated = false;
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
        this.id = params.get('employeeId');
    });
    this.employee$ = this.employeesService.getEmployeeByID(this.id);
  }

}
