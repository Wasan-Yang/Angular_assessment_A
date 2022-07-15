import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnswerComponent } from './answer/answer.component';
import { QuestionComponent } from './question/question.component';

const routes: Routes = [
  {
    component: QuestionComponent,
    path: 'form/builder',
  },
  {
    component: AnswerComponent,
    path: 'form/answers',
  },
  {
    path: '**',
    redirectTo: 'form/builder',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
