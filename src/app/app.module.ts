import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import {AdminModule} from "./admin/admin.module";
import {MatIconModule, MatToolbarModule} from "@angular/material";

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
