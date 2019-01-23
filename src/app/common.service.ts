import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Appstate, Answer, Question } from './_models';

import { LOAD_QUESTIONS, ADD_ANSWER, LOAD_ANSWERS, MOVE_TO_TOP } from './_reducers';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  // answers: Array<Answer> = []
  constructor(private store: Store<Appstate>) {

    // this.store.select('answers').subscribe(res => {
    //     this.answers = res;
    // })
  }

  //Not using this func
  // getAll(){
  // 	let urls = ['https://api.myjson.com/bins/dck5b', 'https://api.myjson.com/bins/hildr'];

  // 	Promise.all([
  // 		fetch(urls[0]).then( res => res.json()).then( res => res.feed_questions),
  // 		fetch(urls[1]).then( res => res.json()).then( res => res.feed_answers)
  // 		]).then(responses => {
  // 			// console.log(responses);

  // 			let list: Array<Question> = [];

  // 			for(let q of responses[0]){
  // 				let _q: Question = {
  // 					id: q.Id,
  // 					text: q.Text,
  // 					downvotes: Number(q.downvotes) || 0, 
  // 					upvotes: Number(q.upvotes) || 0,
  // 					answers: responses[1].filter(r => r['Question-Id'] === q.Id)
  // 					.map(a => {
  // 						let ans: Answer = {
  // 							id: a.Id,
  // 							qId: a['Question-Id'],
  // 							text: a.Answer,
  // 							upvotes: Number(a.upvotes) || 0,
  // 							downvotes: Number(a.downvotes) || 0,
  // 							createdAt: a.created_at,
  // 							createdBy: a.created_by
  // 						}
  // 						return ans;
  // 					}).sort((a,b) => new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1 )
  // 				}
  // 				list.push(_q);
  // 			}
  // 			this.store.dispatch({ type: LOAD_QUESTIONS, payload: list });
  // 		})
  // }

  getQuestions() {
  	fetch('https://api.myjson.com/bins/dck5b')
  	.then(res => res.json())
  	.then(res => {
  		console.log(res);
  		if( 'feed_questions' in res){

  			let list: Array<Question> =  [];

  			for(let question of res['feed_questions']){
  				let q: Question = {
  					id: question.Id,
  					text: question.Text,
  					downvotes: Number(question.downvotes) || 0,
  					upvotes: Number(question.upvotes) || 0,
            isVoted: ''
  				}
  				list.push(q);
  			}

  			this.store.dispatch({type: LOAD_QUESTIONS, payload: list});
  		}
  	});
  }

  getAnswers() {

  	fetch('https://api.myjson.com/bins/hildr')
  	.then(res => res.json())
  	.then(res => {
  		console.log(res)
  		if( 'feed_answers' in res){
  			let list: Array<Answer> =  [];

  			for(let answer of res['feed_answers']){
  				let q: Answer = {
  					id: answer.Id,
  					qId: answer['Question-Id'],
  					text: answer['Answer'],
  					downvotes: Number(answer.downvotes) || 0,
  					upvotes: Number(answer.upvotes) || 0,
  					createdAt: answer.created_at,
  					createdBy: answer.created_by
  				}
  				list.push(q);
  			}

  			list.sort((a,b) => new Date(a.createdAt) > new Date(b.createdAt) ? 1: -1);

  			this.store.dispatch({type: LOAD_ANSWERS, payload: list});
  		}
  	});
  }

  addAnswer(answer: Answer) {
  	
  	this.store.dispatch({type: ADD_ANSWER, payload: { data: answer}});
    this.store.dispatch({ type: MOVE_TO_TOP, payload: { id: answer.qId}});

  }

}
