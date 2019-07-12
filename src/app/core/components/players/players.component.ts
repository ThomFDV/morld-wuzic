import { Component, OnInit } from '@angular/core';
import {GameService} from "../../services/game/game.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.sass']
})
export class PlayersComponent implements OnInit {

  players: FormGroup;

  constructor(private gameService: GameService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.players = this.fb.group({
      player1: ['', Validators.required],
      player2: ['', Validators.required],
      player3: ['', Validators.required],
      player4: ['', Validators.required]
    })
  }

  onSubmit() {
    this.gameService.setPlayers(this.players.value);
    alert(this.gameService.player1);
    this.router.navigateByUrl('/game');
  }

}
