import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {AdminModule} from './admin/admin.module';
import {MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/locales/', '.json');
}

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [
    TranslateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
