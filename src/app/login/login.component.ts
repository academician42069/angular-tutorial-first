import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { SignUpService } from '../sign-up.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  checkedForm;

  constructor(private formbuilder: FormBuilder, private signUpService: SignUpService) {
    this.checkedForm = formbuilder.group({
        email: ['', Validators.email],
        password: [''],
        valid: [true],
    });
  }

  get email() {
      return this.checkedForm.get('email') as FormControl;
  }

  get password() {
      return this.checkedForm.get('password') as FormControl;
  }

  onSubmit() {
    const user = this.signUpService.readUserByEmail(this.email.value);

    if (user) {
      this.signUpService.signIn();
      window.alert('Successfully signed in!');
    } else {
      window.alert('There\'s no such user in the database');
    }
  }

  ngOnInit() {
  }

}
