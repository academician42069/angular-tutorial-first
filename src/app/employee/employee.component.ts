import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {

  id;
  private employee;
  employee$;
  private updating = false;
  updateForm;

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
    this.employeesService.delete(this.id).subscribe();
    window.alert('Employee removed');
    this.router.navigate(['/employees']);
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
        this.id = params.get('employeeId');
    });
    this.employee$ = this.employeesService.getEmployeeByID(this.id);
  }

}
