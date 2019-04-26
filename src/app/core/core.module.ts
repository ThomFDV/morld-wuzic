import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./component/home/home.component";
import {NotFoundComponentComponent} from "./component/not-found-component/not-found-component.component";

@NgModule({
  declarations: [ HomeComponent, NotFoundComponentComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
