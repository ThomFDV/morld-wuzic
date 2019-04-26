import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) { }

  isUserAuthenticated() {
    return new Observable<boolean> ((observer) => {
      if (this.activatedRoute.snapshot.paramMap.get('isAdmin') === 'true') {
        console.log()
        observer.next(true);
      }
    });
  }

  isUserAuthenticatedRest() {
    return this.http.get('http://localhost:3000/users');
  }
}
