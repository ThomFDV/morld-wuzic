import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GameService} from "../../services/game/game.service";
import {Quiz} from "../../models/quiz";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass']
})
export class GameComponent implements OnInit {

  private quiz: Quiz[] = [];
  private quizId = [];
  private order = [];
  private answerNbr = 4;
  private quizNbr = 4;
  answers0: FormGroup;
  public goodAnswer = 0;

  constructor(private formBuilder: FormBuilder,
              private gameService: GameService) {}

  ngOnInit() {
    this.shuffle();
    this.shuffleAnswers();
    for (let i = 0; i < this.quizNbr; i++) {
      this.getQuiz(i);
    }
    this.answers0 = this.formBuilder.group({
      answer0: ['', Validators.required]
    });
  }

  getQuiz(i) {
    this.gameService.getQuiz(this.quizId[i]).subscribe((res: Quiz) => {
      this.quiz.push(res);
    });
  }

  shuffle() {
    let arr = [];
    while (arr.length < this.quizNbr) {
      let r = Math.floor(Math.random() * this.quizNbr) + 1;
      if (arr.indexOf(r) === -1) {
        arr.push(r);
      }
    }
    this.quizId = arr;
  }

  shuffleAnswers() {
    let arr = [];
    while (arr.length < this.answerNbr) {
      let r = Math.floor(Math.random() * this.quizNbr) + 1;
      if (arr.indexOf(r) === -1) {
        arr.push(r);
      }
    }
    this.order = arr;
  }

  isCorrect0() {
    if (this.answers0.controls.answer0.value === this.quiz[0].artist) {
      this.goodAnswer += 1;
    }

    this.gameService.setScore(this.goodAnswer);
    console.log(this.goodAnswer);
  }
}