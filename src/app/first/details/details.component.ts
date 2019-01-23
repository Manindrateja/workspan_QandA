import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store, } from '@ngrx/store';
import { Appstate, Question, Answer } from '../../_models';
import { CommonService } from '../../common.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit,  OnDestroy{

	sub: Subscription = new Subscription();

  	constructor(private store: Store<Appstate>, private commonService: CommonService, private activatedRoute: ActivatedRoute) { }

  question: Question;
  answers: Array<Answer>;
  id: string;

  ngOnInit() {

    this.id = this.activatedRoute.snapshot.params.id;
    // console.log(this.id);

  	let sub1 =  this.store.select('questions').subscribe(res => {
  		this.question = res.find( res => res.id === this.id);
  	});

  	this.sub.add(sub1);


    let sub2 =  this.store.select('answers').subscribe(res => {
      this.answers = res.filter( res => res.qId === this.id);
    });

    this.sub.add(sub2);

  }

  showPost: boolean = false;
  showComment(e){
    this.showPost = !this.showPost;
  }

  newanswer: string = '';
  postAnswer(text){
    let answer: Answer = {
      id: '',
      qId: this.id,
      text,
      upvotes: 0,
      downvotes: 0,
      createdAt: Date.now(),
      createdBy: { name : 'You'}
    }
    this.commonService.addAnswer(answer);
    this.newanswer = '';
  }

  ngOnDestroy(){
  	this.sub.unsubscribe();
  }

}
