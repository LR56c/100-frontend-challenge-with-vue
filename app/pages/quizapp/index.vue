<script setup
	lang="ts">

import { toast } from 'vue-sonner'
import QuizappProgress from '~/components/quizapp/QuizappProgress.vue'
import SwitchTheme from '~/components/quizapp/SwitchTheme.vue'
import { useQuizapp } from '~/components/quizapp/useQuizapp'

const store = useQuizapp()
const {
	      quiz,
	      currentQuiz,
	      currentIndex,
	      totalPoints,
	      currentPoints,
	      percentagePoints
      }     = storeToRefs( store )

const abcOptionsList: string[] = [
	'A',
	'B',
	'C',
	'D'
]

const questionSelected = ref<string | undefined>( undefined )

const handleNextQuestion = () => {
	if ( !questionSelected.value ) {
		toast( 'Please select an option', {} )
		return
	}
	store.nextQuiz( questionSelected.value! )
	questionSelected.value = undefined
}

watchEffect(()=>{
	console.log(percentagePoints.value)
	console.log(currentPoints.value)
})

</script>

<template>
	<div class="bg-gradient-to-r from-[#d798fb] to-[#5550e0] w-screen h-screen flex flex-col items-center justify-center">
		<div v-if="currentQuiz"
			class="relative w-full max-w-sm bg-white dark:bg-gray-950 shadow-lg rounded-2xl flex flex-col p-4 gap-4">
			<div class="flex w-full justify-between">
				<div class="flex gap-1 items-center">
					<div class="flex justify-center items-center bg-transparent dark:bg-white rounded p-1">
						<Icon name="simple-icons-quizlet"/>
					</div>
					<span class="font-semibold dark:text-white text-black">QuizApp</span>
				</div>
				<switch-theme></switch-theme>
			</div>
			<quizapp-progress indicator
				v-model="percentagePoints"
				:point-value="currentPoints"
				:max="totalPoints"
				class="bg-gray-300"
				class-indicator="bg-gradient-to-r from-[#d798fb] to-[#5550e0]"></quizapp-progress>
			<span class="text-gray-400 ">Question {{ currentIndex }} of {{
					quiz.length
				}}</span>
			<span class="text-lg dark:text-white font-semibold">{{
					currentQuiz.question
				}}</span>
			<div class="flex flex-col gap-4">
				<quizapp-card
					v-for="(o, index) in currentQuiz.options"
					:key="o"
					:quiz="o"
					:label="abcOptionsList[index]"
					:data-selected="questionSelected === abcOptionsList[index]"
					@click="questionSelected = abcOptionsList[index]"
				></quizapp-card>
			</div>
			<button
				@click="handleNextQuestion"
				class="flex justify-center items-center dark:bg-violet-400 bg-violet-800 rounded-2xl w-full py-2 text-white">
				Next Question
			</button>
		</div>
	</div>
</template>

<style scoped>

</style>