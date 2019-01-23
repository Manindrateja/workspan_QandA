import { Component, OnInit, OnDestroy } from '@angular/core';

import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { CommonService } from './common.service';
import { Appstate, Question, Answer } from './_models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{

	sub: Subscription = new Subscription();

	questions: Array<Question>;
	// answers: Array<Answer>;
  	
  	constructor(private store: Store<Appstate>, private commonService: CommonService) {

  	}

  	ngOnInit(){

  		let sub1 =  this.store.select('questions').subscribe(res => {
  			// console.log(res);
  			this.questions =  res;
  		});

  		this.sub.add(sub1);

  		// let sub2 =  this.store.select('answers').subscribe(res => {
  		// 	console.log(res);
  		// });

  		// this.sub.add(sub2);
  	}

  	ngOnDestroy(){
  		this.sub.unsubscribe();
  	}

  	addAnswer(answer) {
  		this.commonService.addAnswer(answer);
  	}

}
