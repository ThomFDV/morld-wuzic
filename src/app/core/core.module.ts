import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./components/home/home.component";
import {NotFoundComponentComponent} from "./components/not-found-component/not-found-component.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [ HomeComponent, NotFoundComponentComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule { }
