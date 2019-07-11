import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private access = false;

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
