import { Injectable } from '@angular/core';
import { QuestionModel } from './../models/question.model';
@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  private questions: QuestionModel[] = [];
  constructor() {}
  public getQuestion() {
    return this.questions;
  }
  public setQuestion(question: QuestionModel) {
    this.questions.push(question);
  }
}
