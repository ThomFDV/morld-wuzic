import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from "./component/footer/footer.component";
import {HeaderComponent} from "./component/header/header.component";
import {AdminHomeComponent} from "./component/admin-home/admin-home.component";
import {AuthenticationService} from "./services/authentication.service";

@NgModule({
  declarations: [
      FooterComponent,
      HeaderComponent,
      AdminHomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
      FooterComponent,
      AdminHomeComponent
  ],
  providers: [
      AuthenticationService
  ]
})
export class AdminModule { }
