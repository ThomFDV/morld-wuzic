import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './admin/component/footer/footer.component';
import { HeaderComponent } from './admin/component/header/header.component';
import { AdminHomeComponent } from './admin/component/admin-home/admin-home.component';
import { HomeComponent } from './core/component/home/home.component';
import { NotFoundComponentComponent } from './core/component/not-found-component/not-found-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    AdminHomeComponent,
    HomeComponent,
    NotFoundComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
