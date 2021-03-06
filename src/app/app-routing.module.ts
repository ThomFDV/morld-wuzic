import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./core/components/home/home.component";
import {NotFoundComponentComponent} from "./core/components/not-found-component/not-found-component.component";
import {AdminRoutingModule} from "./admin/admin-routing.module";
import {LoginComponent} from "./core/components/login/login.component";
import {RegisterComponent} from "./core/components/register/register.component";
import {GameComponent} from "./core/components/game/game.component";
import {ScoreComponent} from "./core/components/score/score.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'game',
    component: GameComponent
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
