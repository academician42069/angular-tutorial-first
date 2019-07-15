import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

interface IEmployee {
  id: string;
  employee_name: string;
  employee_salary: string;
  employee_age: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  host = 'http://dummy.restapiexample.com/api/v1';

  constructor(private http: HttpClient) { }

  getEmployees() {
    const url = `${this.host}/employees`;

    return this.http
      .get(url)
      .pipe(map((employees: IEmployee[]) => {
        return employees.map(employee => {
          return {
            id: employee.id,
            name: employee.employee_name,
            salary: employee.employee_salary,
            age: employee.employee_age,
          };
        });
      }));
  }

  getEmployeeByID(id: string) {
    const url = `${this.host}/employee/${id}`;

    return this.http
      .get(url)
      .pipe(map((employee: IEmployee) => {
          return [{
            id: employee.id,
            name: employee.employee_name,
            salary: employee.employee_salary,
            age: employee.employee_age,
          }];
        }));
    }

  register(newEmployee) {
    const url = `${this.host}/create`;

    return this.http
      .post(url, newEmployee)
      .pipe(catchError(this.handleError));
  }

  update(id, newData) {
    const url = `${this.host}/update/${id}`;
    console.log(newData);

    return this.http
      .put(url, newData);
  }

  delete(id) {
    const url = `${this.host}/delete/${id}`;

    return this.http
      .delete(url)
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    window.alert('An error occured. This may be because the user already exists.');
    return throwError('An error occured. This may be because the user already exists.');
  }

}
