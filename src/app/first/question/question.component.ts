import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Question, Answer, Appstate } from '../../_models';
import { Store } from '@ngrx/store';
import { VOTED } from '../../_reducers';



@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

	@Input()
	question: Question;

	@Input()
	canComment: boolean;

	@Output() showpostsection?= new EventEmitter();

	constructor(private store: Store<Appstate>) { }

	ngOnInit() {

	}

	allowComment(){
		this.showpostsection.emit(true);
	}

	upVote(){
		if(!this.question.isVoted){
			this.question.upvotes++;
			this.question.isVoted = 'up';
			this.store.dispatch({ type: VOTED, payload: {id: this.question.id , upvotes: this.question.upvotes, downvotes: this.question.downvotes, isVoted: 'up' }});
		}
	}

	downVote(){

		if(!this.question.isVoted){
			this.question.downvotes++;
			this.question.isVoted = 'down';
			this.store.dispatch({ type: VOTED, payload: {id: this.question.id , upvotes: this.question.upvotes, downvotes: this.question.downvotes, isVoted: 'down' }});
		}

	}

}
