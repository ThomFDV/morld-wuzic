import { Injectable } from '@angular/core';
import {LocalstorageService} from "../localstorage/localstorage.service";
import {Observable} from "rxjs";
import {Users} from "../../models/users";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: Users;

  constructor(private localService: LocalstorageService,
              private http: HttpClient) { }

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

  register(user : Users) {
    alert("arrived here");
    return this.http.post('http://localhost:3000/users', user);
  }
}
