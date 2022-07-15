import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { isEmpty } from 'rxjs';
import { QuestionService } from '../service/question.service';
import { Option, QuestionModel } from './../models/question.model';

@Component({
  selector: 'question-form',
  templateUrl: './question.form.html',
  styleUrls: ['./question.form.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionFormComponent implements OnInit {
  @Output() onClose = new EventEmitter();

  errorList: string[] = [];
  questionType: any[] = [
    { type: 'text', label: 'Paragraph answer' },
    { type: 'checkbox', label: 'Checkbox List' },
  ];
  public questionForm: QuestionModel = {
    type: 'checkbox',
    question: '',
    answer: '',
    options: [],
  };
  public answerList: Option[] = [];
  constructor(private _questionService: QuestionService) {}
  ngOnInit(): void {}

  submitQuestion() {
    this.validate();
    console.log(this.errorList);
    if (this.questionForm.type === 'checkbox') {
      this.questionForm.options = this.answerList;
    }
    if (this.errorList.length > 0) return;
    this._questionService.setQuestion(this.questionForm);
    this.onClose.emit();
  }

  addAnswer() {
    this.answerList.push({ value: '' });
  }
  trackByIndex(index: number, obj: any): any {
    return index;
  }

  validate() {
    if (this.questionForm.question === '') {
      this.errorList.push('Please enter question.');
    } else if (
      this.questionForm.type === 'checkbox' &&
      this.answerList.length === 0
    ) {
      this.errorList.push('Please add answer.');
    } else if (
      this.questionForm.type === 'checkbox' &&
      this.answerList.length > 0 &&
      this.answerList.some((t) => t.value === '')
    ) {
      this.errorList.push('Check list can not be empty.');
    } else {
      this.errorList = [];
    }
  }
}
