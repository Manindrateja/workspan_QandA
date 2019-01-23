import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'


import { SharedModule } from '../shared/shared.module';
import { CommonService } from '../common.service'

import { QuestionsComponent } from './questions/questions.component';
import { QuestionComponent } from './question/question.component';
import { AnswerComponent } from './answer/answer.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  { path: '', component: QuestionsComponent},
  { path: ':id', component: DetailsComponent}
];

@NgModule({
  declarations: [QuestionsComponent, QuestionComponent, AnswerComponent, DetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    FormsModule, ReactiveFormsModule
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  providers: [ CommonService ]
})
export class FirstModule { 

	constructor(private commonService: CommonService) {
		this.commonService.getQuestions();
    this.commonService.getAnswers();
	}

}
