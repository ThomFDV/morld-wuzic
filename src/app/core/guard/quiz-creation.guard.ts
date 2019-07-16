import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {LocalstorageService} from "../services/localstorage/localstorage.service";

@Injectable({
  providedIn: 'root'
})
export class QuizCreationGuard implements CanActivate {
  constructor(private localStorage: LocalstorageService,
              private router: Router) { }

  canActivate() {
    let connected = this.localStorage.isAdminConnected();
    if (connected === 'true') {
      return true;
    }
    alert('Vous devez vous connecter d\'abord');
    return false;
  }
}
