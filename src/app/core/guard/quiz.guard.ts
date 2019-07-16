import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {GameService} from "../services/game/game.service";

@Injectable({
  providedIn: 'root'
})
export class QuizGuard implements CanActivate {

  constructor(private gameService: GameService,
              private router: Router) { }

  canActivate() {
    if (this.gameService.players.length !== 4) {
      alert('Vous devez entrer les joueurs d\'abord !');
      this.router.navigateByUrl('/players');
      return false;
    }
    return true;
  }
}
