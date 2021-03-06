import { Component, OnInit, Input } from '@angular/core';

import { Answer } from '../../_models';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {

	@Input()
	answer: Answer;

	constructor() { }

	ngOnInit() {
	}

}
