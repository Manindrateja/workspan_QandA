import { Action } from '@ngrx/store';
import { Question, Answer } from './_models'

export const LOAD_QUESTIONS = 'LOAD_QUESTIONS';
export const VOTED = 'VOTED';
export const MOVE_TO_TOP = 'MOVE_TO_TOP';

export function QuestionsReducer(state: Array<Question> = [], action: Action) {
	switch (action.type) {
		

		case LOAD_QUESTIONS:
			return action['payload'];

		case VOTED:
			let tState = Object.assign([], state);

			let q = tState.find(q => q.id === action['payload']['id']);
			
			if(q) {
				q.upvotes = action['payload']['upvotes'];
				q.downvotes = action['payload']['downvotes'];
				q.isVoted = action['payload']['isVoted'];
			}

			return tState;

		case MOVE_TO_TOP:
			// Move Newly updated Question to top
			tState = Object.assign([], state);
			let index = tState.findIndex(q => q.id === action['payload']['id']);
			if(index > -1){
				let q = tState.splice(index,1);
				tState.splice(0,0,q[0]);
			}

			return tState;
		
		default:
			return state;
	}
}

export const LOAD_ANSWERS = 'LOAD_ANSWERS';
export const ADD_ANSWER = 'ADD_ANSWER';

export function AnswersReducer(state: Array<Answer> = [], action: Action) {

	switch (action.type) {

		case LOAD_ANSWERS:
			return action['payload'];


		case ADD_ANSWER: 
			
			// Post lastest answer to top
			let tState = Object.assign([], state);
			tState.splice(0,0, action['payload']['data']);

			return tState;
		
		default:
			return state;
	}

}