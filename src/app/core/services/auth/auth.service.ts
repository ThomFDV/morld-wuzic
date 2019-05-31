import { Injectable } from '@angular/core';
import {LocalstorageService} from "../localstorage/localstorage.service";
import {Observable} from "rxjs";
import {Users} from "../../models/users";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: Users;

  constructor(private localService: LocalstorageService) { }

  isUserAuthenticated(username: string, password: string): Observable<boolean> {
    let isLoggedIn = false;
    if (username === 'admin' && password === 'admin') {
      this.currentUser = {
        id: 1,
        lastname : 'admin',
        firstname: 'admin',
        email: 'admin.admin@admin.admin'
      };
      this.localService.set('currentUser', this.currentUser.toString());
      isLoggedIn = true;
    } else {
      this.localService.remove('currentUser');
    }
    return new Observable((observer) => {
      observer.next(isLoggedIn);
    });
  }
}
