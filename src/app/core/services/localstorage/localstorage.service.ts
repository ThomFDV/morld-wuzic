import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  subject = new BehaviorSubject<string>(null);

  constructor() { }

  set(key: string, value: string) {
    localStorage.setItem(key, value);
    this.subject.next(key);
  }

  isAdminConnected() {
    return localStorage.getItem('admin');
  }

  remove(key: string) {
    localStorage.removeItem(key);
    this.subject.next(null);
  }
}
