import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./components/home/home.component";
import {NotFoundComponentComponent} from "./components/not-found-component/not-found-component.component";
import {RouterModule} from "@angular/router";
import { LoginComponent } from './components/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material";

@NgModule({
  declarations: [ HomeComponent, NotFoundComponentComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule
  ]
})
export class CoreModule { }
