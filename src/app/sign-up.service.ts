import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SignUpService {
    private users = [];

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
}
