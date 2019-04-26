import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isUserAuthenticated() {
    return new Observable<boolean> ((observer) => {
      observer.next(true);
    });
  }
  constructor() { }
}
