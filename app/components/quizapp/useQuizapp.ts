import { ulid } from 'ulidx'

export type Quiz = {
	id: string
	question: string
	options: string[]
	answer: string
}

export const useQuizapp = defineStore( 'quizapp', () => {

	const quiz = ref<Quiz[]>( [
		{
			id      : ulid(),
			question: 'What is the capital of France?',
			options : [ 'Paris', 'London', 'Berlin', 'Madrid' ],
			answer  : 'Paris'
		},
		{
			id      : ulid(),
			question: 'What is the capital of Spain?',
			options : [ 'Paris', 'London', 'Berlin', 'Madrid' ],
			answer  : 'Madrid'
		},
		{
			id      : ulid(),
			question: 'What is the capital of Germany?',
			options : [ 'Paris', 'London', 'Berlin', 'Madrid' ],
			answer  : 'Berlin'
		}
	] )

	const currentQuizIndex = ref<number>( 0 )
	const goodAnswers      = ref<number>( 0 )

	const currentQuiz = computed( () => quiz.value[currentQuizIndex.value] )

	const nextQuiz = ( answer: string ) => {
		console.log( currentQuiz.value?.answer === answer )
		if ( currentQuiz.value?.answer === answer ) {
			goodAnswers.value++
		}

		if ( currentQuizIndex.value === quiz.value.length - 1 ) {
			currentQuizIndex.value = 0
			return
		}
		currentQuizIndex.value++
	}

	const restartQuiz = () => {
		currentQuizIndex.value = 0
	}


	const totalPoints      = computed( () => quiz.value.length * 10 )
	const percentagePoints = computed( () => Math.floor( ( goodAnswers.value / quiz.value.length ) * 100 ) )
	const currentPoints    = computed( () => goodAnswers.value * 10 )

	return {
		quiz        : readonly( quiz ),
		currentQuiz : readonly( currentQuiz ),
		currentIndex: computed( () => currentQuizIndex.value + 1 ),
		currentPoints,
		percentagePoints,
		totalPoints,
		nextQuiz,
		restartQuiz
	}
} )