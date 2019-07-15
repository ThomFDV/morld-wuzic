import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  url = 'http://localhost:3000/quiz';
  score: number;
  players = [];

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
    this.players.push(players.player1);
    this.players.push(players.player2);
    this.players.push(players.player3);
    this.players.push(players.player4);
  }
}
