
export interface Appstate {
	questions: Array<Question>,
	answers: Array<Answer>
}

export interface Question {
	id: string,
	text: string,
	upvotes: number,
	downvotes: number,
	isVoted: string
	// answers: Array<Answer>
}

export interface Answer {
	id: string,
	qId: string,
	text: string,
	upvotes: number,
	downvotes: number,
	createdAt: any,
	createdBy: any
}