import { Injectable } from '@angular/core';
import { AnswerModel } from './../models/answer.model';
@Injectable({
  providedIn: 'root',
})
export class AnswerService {
  public answers: AnswerModel[] = [];
  constructor() {}
  public getAnswer() {
    return this.answers;
  }

  public setAnswer(answer: AnswerModel) {
    this.answers.push(answer);
  }
}
