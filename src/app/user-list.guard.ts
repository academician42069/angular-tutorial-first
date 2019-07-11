import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SignUpService } from './sign-up.service';

@Injectable({
  providedIn: 'root'
})
export class UserListGuard implements CanActivate {
  constructor(private signUpService: SignUpService) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.signUpService.status;
  }

}
