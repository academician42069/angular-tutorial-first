import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SignUpService {
    private users = [];
    private signedIn = false;

    constructor() {

    }

    addUser(userObj) {
        this.users.push(userObj);
    }

    readAll() {
        const readArray = [];
        this.users.forEach((value) => {
            readArray.push(value);
        });
        return readArray;
    }

    readUserByEmail(email) {
        return this.users.find((user) => user.email === email);
    }

    get status() {
        return this.signedIn;
    }

    signIn() {
        this.signedIn = true;
    }

    logOut() {
        this.signedIn = false;
    }

}
