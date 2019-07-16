import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {GameService} from "../../services/game/game.service";
import {LocalstorageService} from "../../services/localstorage/localstorage.service";

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.sass']
})
export class AddSongComponent implements OnInit {

  songCreationForm: FormGroup;

  constructor(private fb: FormBuilder,
              private gameService: GameService,
              private localStorage: LocalstorageService,
              private router: Router) { }

  ngOnInit() {
    this.songCreationForm = this.fb.group({
      title: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      artist: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      option0: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      option1: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      option2: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      option3: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      embed: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.songCreationForm.invalid) {
      alert("Un problème est survenu lors de l'enregistrement");
      return;
    }

    this.gameService.addSong(this.songCreationForm.value).subscribe(result => {
      alert("Bien enregisté !");
      this.router.navigateByUrl('/players');
    });
  }

  disconnect() {
    this.localStorage.remove('admin');
    this.router.navigateByUrl('/players');
  }
}
