import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./components/home/home.component";
import {NotFoundComponentComponent} from "./components/not-found-component/not-found-component.component";
import {RouterModule} from "@angular/router";
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [ HomeComponent, NotFoundComponentComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule { }
