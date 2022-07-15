import { Component, OnInit } from '@angular/core';
import { AnswerModel } from '../core/models/answer.model';
import { QuestionService } from './../core/service/question.service';
import { QuestionModel } from './../core/models/question.model';
import { Router } from '@angular/router';

@Component({
  selector: 'question-component',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css'],
})
export class AnswerComponent implements OnInit {
  questionList: QuestionModel[] = [];
  constructor(
    private _questionService: QuestionService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.questionList = this._questionService.getQuestion();
  }
  back() {
    this.router.navigate(['/form/builder']); // define your component where you want to go
  }
}
