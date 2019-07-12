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
  private order1 = [];
  private order2 = [];
  private order3 = [];
  private order4 = [];
  private answerNbr = 4;
  private quizNbr = 4;
  answers0: FormGroup;
  answers1: FormGroup;
  answers2: FormGroup;
  answers3: FormGroup;
  public goodAnswer = 0;
  embedUrl: string;

  constructor(private formBuilder: FormBuilder,
              private gameService: GameService) {}

  ngOnInit() {
    this.shuffle();
    this.order1 = this.shuffleAnswers();
    this.order2 = this.shuffleAnswers();
    this.order3 = this.shuffleAnswers();
    this.order4 = this.shuffleAnswers();
    for (let i = 0; i < this.quizNbr; i++) {
      this.getQuiz(i);
    }
    this.answers0 = this.formBuilder.group({
      answer0: ['', Validators.required]
    });
    this.answers1 = this.formBuilder.group({
      answer1: ['', Validators.required]
    });
    this.answers2 = this.formBuilder.group({
      answer2: ['', Validators.required]
    });
    this.answers3 = this.formBuilder.group({
      answer3: ['', Validators.required]
    });
  }

  getQuiz(i) {
    this.gameService.getQuiz(this.quizId[i]).subscribe((res: Quiz) => {
      this.quiz.push(res);
      this.embedUrl = "https://www.youtube.com/embed/9bZkp7q19f0?controls=0";
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
    return arr;
  }

  isCorrect0() {
    if (this.answers0.controls.answer0.value === this.quiz[0].artist) {
      this.goodAnswer += 1;
    }
  }

  isCorrect1() {
    if (this.answers1.controls.answer1.value === this.quiz[1].artist) {
      this.goodAnswer += 1;
    }
  }

  isCorrect2() {
    if (this.answers2.controls.answer2.value === this.quiz[2].artist) {
      this.goodAnswer += 1;
    }
  }

  isCorrect3() {
    if (this.answers3.controls.answer3.value === this.quiz[3].artist) {
      this.goodAnswer += 1;
    }
    this.gameService.setScore(this.goodAnswer);
    console.log(this.goodAnswer);
  }
}
