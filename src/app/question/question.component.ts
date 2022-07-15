import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { QuestionService } from '../core/service/question.service';

@Component({
  selector: 'question-component',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  constructor(
    private _questionService: QuestionService,
    private modalService: NgbModal,
    private router: Router
  ) {}

  questions: any = this._questionService.getQuestion();
  ngOnInit(): void {}
  title = 'question';

  addQuestion(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          console.log(result);
        },
        (reason) => {
          console.log(reason);
        }
      );
  }
  onSubmit() {
    this.router.navigate(['/form/answers']); 
  }
  onCloseModal() {}
}
