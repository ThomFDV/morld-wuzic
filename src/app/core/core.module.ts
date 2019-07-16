import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './components/home/home.component';
import {NotFoundComponentComponent} from './components/not-found-component/not-found-component.component';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule, MatRadioModule,
    MatStepperModule, MatTooltipModule
} from '@angular/material';
import { RegisterComponent } from './components/register/register.component';
import {GameComponent} from './components/game/game.component';
import {ScoreComponent} from './components/score/score.component';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import { PlayersComponent } from './components/players/players.component';
import {SafePipe} from "./pipe/safe.pipe";
import { AddSongComponent } from './components/add-song/add-song.component';

@NgModule({
  declarations: [
      HomeComponent,
      NotFoundComponentComponent,
      LoginComponent,
      RegisterComponent,
      GameComponent,
      ScoreComponent,
      PlayersComponent,
      SafePipe,
      AddSongComponent
  ],
  imports: [
    TranslateModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatCardModule,
    MatDividerModule,
    MatStepperModule,
    MatRadioModule,
    MatTooltipModule
  ],
  providers: [
    TranslateService
  ]
})
export class CoreModule { }
