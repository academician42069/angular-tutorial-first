import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { SignUpService } from '../sign-up.service';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

    checkedForm;

    static isMatching(password1: string, password2: string) {
        return password1 === password2;
    }

    constructor(private formbuilder: FormBuilder, private service: SignUpService) {
        this.checkedForm = formbuilder.group({
            email: ['', Validators.email],
            password: ['', Validators.pattern(/^[a-zA-Z0-9]{7,}$/)],
            password2: ['', Validators.pattern(/^[a-zA-Z0-9]{7,}$/)],
            nickname: ['', Validators.pattern(/^[a-zA-Z0-9\-]*$/)],
            phone: ['', Validators.pattern(/^\+380\d{9}$/)],
            website: ['', Validators.pattern(/^(http[s]?:\/\/)?(www\.)?\w*\.\w*$/)],
            terms: [false],
        }, {
            validators: this.crossValidation,
        });

        console.log(this.checkedForm.get('email').value);
    }

    get email() {
        return this.checkedForm.get('email') as FormControl;
    }

    get password() {
        return this.checkedForm.get('password') as FormControl;
    }

    get password2() {
        return this.checkedForm.get('password2') as FormControl;
    }

    get nickname() {
        return this.checkedForm.get('nickname') as FormControl;
    }

    get phone() {
        return this.checkedForm.get('phone') as FormControl;
    }

    get website() {
        return this.checkedForm.get('website') as FormControl;
    }

    get terms() {
        return this.checkedForm.get('terms') as FormControl;
    }


    crossValidation(formGroup) {
        const pw1 = formGroup.get('password').value;
        const pw2 = formGroup.get('password2').value;

        return pw1 === pw2 ? null : {
            pw1,
            pw2
        };
    }

    onSubmit(value) {
        console.log(value);
        this.service.addUser(value);
        this.checkedForm.reset();
    }

    ngOnInit() { }

}
