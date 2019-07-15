import { Injectable } from '@angular/core';
import {Users} from "../../models/users";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  isUserAuthenticated(username: string, password: string) {
    return username === 'admin' && password === 'admin';
  }

  register(user : Users) {
    return this.http.post('http://localhost:3000/users', user);
  }
}
