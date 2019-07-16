import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  access = false;
  // private access = false;

  constructor() { }

  allow() {
    this.access = true;
  }

  disallow() {
    this.access = false;
  }

  isEnabled() {
    return this.access;
  }
}
