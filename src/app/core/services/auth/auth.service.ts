import { Injectable } from '@angular/core';
import {Users} from "../../models/users";
import {HttpClient} from "@angular/common/http";
import {LocalstorageService} from "../localstorage/localstorage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
              private localStorage: LocalstorageService) { }

  isUserAuthenticated(username: string, password: string) {
    if (username === 'admin' && password === 'admin') {
      this.localStorage.set('admin', 'true');
      return true;
    }
    return false;
  }

  register(user : Users) {
    return this.http.post('http://localhost:3000/users', user);
  }
}
