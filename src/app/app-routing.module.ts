import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./core/components/home/home.component";
import {NotFoundComponentComponent} from "./core/components/not-found-component/not-found-component.component";
import {AdminRoutingModule} from "./admin/admin-routing.module";
import {LoginComponent} from "./core/components/login/login.component";
import {RegisterComponent} from "./core/components/register/register.component";
import {GameComponent} from "./core/components/game/game.component";
import {ScoreComponent} from "./core/components/score/score.component";
import {PlayersComponent} from "./core/components/players/players.component";
import {QuizGuard} from "./core/components/guard/quiz.guard";
import {AddSongComponent} from "./core/components/add-song/add-song.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'players',
    component: PlayersComponent
  },
  {
    path: 'game',
    canActivate: [QuizGuard],
    component: GameComponent
  },
  {
    path: 'game/add',
    component: AddSongComponent
  },
  {
    path: 'score',
    component: ScoreComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'nawak',
    component: NotFoundComponentComponent
  },
  {
    path: '**',
    redirectTo: 'nawak'
  }
];


@NgModule({
  imports: [
      RouterModule.forRoot(routes),
      AdminRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
