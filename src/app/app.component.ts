import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'projet-morld-wusic';
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('fr');
    translate.use(localStorage.getItem('lang') || 'fr');
  }
  changeLang(lang: string) {
    localStorage.setItem('lang', lang);
    this.translate.use(lang);
  }
}
