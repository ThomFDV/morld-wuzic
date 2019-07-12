import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  url = 'http://localhost:3000/quiz';
  score: number;
  player1: string;
  player2: string;
  player3: string;
  player4: string;

  constructor(private http: HttpClient) { }

  getCollection() {
    return this.http.get(this.url + '/quiz');
  }
  getQuiz(quizId) {
    return this.http.get(`${this.url}/${quizId}`);
  }

  setScore(score) {
    this.score = score;
  }
  getScore() {
    return this.score;
  }

  setPlayers(players) {
    this.player1 = players.player1;
    this.player2 = players.player2;
    this.player3 = players.player3;
    this.player4 = players.player4;
  }
}
