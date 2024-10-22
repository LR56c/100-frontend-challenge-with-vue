<script setup
	lang="ts">
import { Accordion } from '~/components/ui/accordion'
</script>

<template>
	<div class="relative w-screen h-screen flex flex-col">
		<div class="absolute gap-8 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white min-h-[532px] max-h-[532px] w-full max-w-md rounded-2xl flex flex-col p-4 text-black">
			<div class="flex items-center gap-2">
				<Icon class="h-8" size="30" name="noto-v1-question-mark"/>
				<div class="font-bold text-3xl">FAQs</div>
			</div>
				<Accordion type="single"
					collapsible class="flex flex-col gap-4">
					<faq-accordeon-item
						title="What is coding?"
						content="Coding is the process of using a programming language to get a computer to behave how you want it to. Every line of code tells the computer to do something, and a document full of lines of code is called a script. Each script is designed to carry out a job. This job might be to take an image and change its size, to show a message on the screen, or to connect to the internet.">
						>
					</faq-accordeon-item>
					<faq-accordeon-item
						title="Which programming language should I learn first?"
						content="The best programming language to start with depends on your goals and interests. Python is often recommended for beginners due to its simple syntax and versatility. Other popular options include JavaScript, Java, and C++.">
					</faq-accordeon-item>
					<faq-accordeon-item
						title="How do I improve my coding skills?"
						content="The best way to improve your coding skills is to practice. The more you code, the better you will get. You can also read books, watch videos, and take online courses to learn new skills and techniques.">
					</faq-accordeon-item>
					<faq-accordeon-item
						title="How do i debug my code effectively?"
						content="The best way to debug your code is to break it down into smaller parts and test each part individually. You can use tools like the Chrome Developer Tools to help you find and fix errors in your code.">
					</faq-accordeon-item>
					<faq-accordeon-item
						title="What are APIs, an how do they work?"
						content="An API, or Application Programming Interface, is a set of rules and protocols that allow different software applications to communicate with each other. APIs are used to send and receive data between different applications, and they are often used to connect web applications to databases, social media platforms, and other services.">
					</faq-accordeon-item>
				</Accordion>
		</div>
		<div class="bg-[#32aaaf] w-screen h-[33%]"></div>
		<div class="bg-gray-200 w-screen h-screen"></div>
	</div>
</template>

<style scoped>

</style>
