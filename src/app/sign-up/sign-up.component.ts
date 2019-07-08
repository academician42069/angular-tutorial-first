import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

    checkedForm;

    constructor(private formbuilder: FormBuilder) {
        this.checkedForm = formbuilder.group({
            email: ['', Validators.email],
            password: ['', [Validators.minLength(8), this.validPassword()]]
        });
    }

    validPassword() {
        return (formControl) => {
            return formControl.value === 'Roman' ? {forbidden: {invalid: true}} : null;
        };
    }

    onSubmit(value) {
        console.log(value);
        this.checkedForm.reset();
    }

    ngOnInit() {
    }

}
