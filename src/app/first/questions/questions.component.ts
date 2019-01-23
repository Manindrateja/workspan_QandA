import { Component, OnInit, OnDestroy } from '@angular/core';

import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { CommonService } from '../../common.service';
import { Appstate, Question, Answer } from '../../_models';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit, OnDestroy {

  sub: Subscription = new Subscription();

	questions: Array<Question>;
	// answers: Array<Answer>;
  	
  	constructor(private store: Store<Appstate>, private commonService: CommonService) {
  		// console.log('questions');
  	}

  	ngOnInit(){

  		let sub1 =  this.store.select('questions').subscribe(res => {
  			// console.log(res);
  			this.questions =  res;
  		});

  		this.sub.add(sub1);

  	}

  	ngOnDestroy(){
  		this.sub.unsubscribe();
  	}

  	addAnswer(answer) {
  		this.commonService.addAnswer(answer);
  	}


}
