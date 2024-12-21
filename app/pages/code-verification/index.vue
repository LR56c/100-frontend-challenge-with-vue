<script setup
	lang="ts">
import { toast } from 'vue-sonner'
import CodeVerificationPinInput
	from '~/components/code-verification/CodeVerificationPinInput.vue'

const valueRef   = ref( [] )
const codeLength = 4

const valueComplete = computed( () => {
	return valueRef.value.length === codeLength
} )

const reset  = () => {
	valueRef.value = []
}
const verify = () => {
	toast( `Confirmed? ${valueRef.value.join('')}`, {} )
}

const resend = () => {
	toast( 'Code resent', {} )
}
</script>

<template>
	<div class="w-screen h-screen bg-[#ffe4fb] flex flex-col gap-4 items-center justify-center">
		<div class="w-full max-w-lg bg-gray-100 h-fit rounded-2xl my-shadow flex items-center flex-col gap-4 py-4">
			<svg class=" w-12 h-12 rounded-2xl"
				version="1.2"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 400 400"
				width="400"
				height="400">
				<defs>
					<image width="200"
						height="200"
						id="img1"
						href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIAQMAAACXljzdAAAAAXNSR0IB2cksfwAAAANQTFRF/gDbCSFoXAAAACdJREFUeJztyaEBAAAMAqD5/9PLBj+ASm6JMcYYY4wxxhhjjDHGlAcOMADJ5po/MQAAAABJRU5ErkJggg=="/>
					<image width="200"
						height="200"
						id="img2"
						href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIAQMAAACXljzdAAAAAXNSR0IB2cksfwAAAANQTFRFpQOTOuIzbAAAACdJREFUeJztyaEBAAAMAqD5/9PLBj+ASm6JMcYYY4wxxhhjjDHGlAcOMADJ5po/MQAAAABJRU5ErkJggg=="/>
					<image width="200"
						height="200"
						id="img3"
						href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIAQMAAACXljzdAAAAAXNSR0IB2cksfwAAAANQTFRF/kjd2OIIZAAAACdJREFUeJztyaEBAAAMAqD5/9PLBj+ASm6JMcYYY4wxxhhjjDHGlAcOMADJ5po/MQAAAABJRU5ErkJggg=="/>
					<image width="200"
						height="200"
						id="img4"
						href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIAQMAAACXljzdAAAAAXNSR0IB2cksfwAAAANQTFRF9ADPHmw59wAAACdJREFUeJztyaEBAAAMAqD5/9PLBj+ASm6JMcYYY4wxxhhjjDHGlAcOMADJ5po/MQAAAABJRU5ErkJggg=="/>
					<image width="233"
						height="167"
						id="img5"
						href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOkAAACnCAMAAADDu4vNAAAAAXNSR0IB2cksfwAAADNQTFRFAAAA////////////////////////////////////////////////////////////////t5XiggAAABF0Uk5TAFAgEM+ff//vYK9w34+/MEAb0MrRAAAF3ElEQVR4nOWd63abMBCEJbBdJ21O+v5P2WvS4tgULWAQuiJLoFHnR5tT6yR8ZTOzkrhwVoY4v7lGbHIcyVVzfnEMKYT0xPkfx5AySKtTy6p3+5gySJ+vXQG/2ccUQcpP4s+L3ZNKIK15Lf46/LaOKoH01EM4PKkAUmFHJHv5FkAq7Ih0s0YqPmlvR/SVtXzhSQc7IlkjFZ70NCOwRio66d2OSDZPQie92xHJFqngpJMdkY6/LEMTH0paze2IZClfbNLT8vBPP41joUllOxKyRCo0qWxHpGbJfhcy6cKOSOaOEJhUsSMhflHP8/BJ0oNJKsWOSMaOEJdUtSPSpx+G8bikGjsimSIVllRnRyRTR4hKqrUjkilSUUn1dkQylC8oqcGOSIZIBSU9VubPDOWLSWq0I5I+UiFJzXbUf6xdZIEktdgRSetJiKQ2OyJpIxWR1GZHJK0nAZLa7YikK188UocdkXSRikfqsiMhXfnCkTrtqB+lRiocqdOOSJpIRSP1sCOS6klgpD52RFIjFYzUx45I6r4FFqmfHZGU8sUi9bMjkrJvAUXqa0c0dhmpSKTedkRa7lsgkXrbEWnZEQKRrrAjoeW+BRDpCjsiLTpCENLXj6Zd80sqtNi3yJ+0fnk7m3dFbZIjNW/S+na8HYIoheSOMFvS+ktAwcqSIzVL0vCClSWVb3akjxWsLClScyKNULCypPLNhbQr2GinctI8UnMgff3x5T0+pdB8kWVn0vrlUsfwHpNmnrQjaZqClTWL1J1IRcHG9B6TZp60PWnqgpU1le+2pDHD0k9TpG5HGjIdeVxT+W5CGqu7C9E9UpOTbl+wi58/RmpK0ujdXZBGT0pFumfByhojNQVp1abq7kI07ltEJu0Ktm12L1hZQ/lGJN2iuwvRsG8RiTTddORxDZH6OOm23V2I+qN7jHTvsPRT3xGGk742H/uHpZf6fYsg0vwLVhZ1hKtJMQpWFu1brCHNo7sLkYhUX9J8ursQiY7QhxSxYGWJSHWQ4hasrK58LaTYBSuri1QDac7dXYi68lVJRVjan+uBqOpdJs11OvK46reJtLSCXehCpGjdXYgOHD8s/cR51R7bEhLTpevwe/raXIvJTr0Okvfy5+bp716Hklb8ouZpV87n8vK0bUzdID8feEmn9/zd2uF3p/dQFXF66zefWRs/47tVd/zeM/EbsltdP9auI1WfrpBu1TZha4P8ucJyK1oGDV7vRXIr2pl5cLdCuFX+p/f8ncXZgcq9de4vAIi3q5hv6xxjB0pVhq3z8Z1uJ0lynUNerbOIGJb02pVMWmfeRN/910qE0b4XPozFtc3VdHu2zk/fhmPY7kfu0zrf74Ta/KrXrd1qu+sG9dqsdZ7uWNzzOvwtWuchYtjudxywxK3zGDEsB1JSqtZ5dhtJJqS9ROsc163GiGGZkfaK6FZiVeX+beN8y+iKE0a53e1l1oOts3RTfN6kpHC3miKGQZCSXhr3GEV532lrUP20/pdWfhwUCin76nh1l0by7AmGdH39ziOGIZGyw0pXauX/GiDS6rhqOPBzV9jnD/eYSctHQSGRrqtfWrifCYq0PqwYu3ziIBTpmsd7KQt0WKTGx/0rQn8KH6uPnmuprZK+YKS+9at5JQkaqWf9aqa2cKR+rf5sVWUUHKlXq6979QoeqU+rr9sDAiR11++wNywLkNRdv2rEMExSV/3OFu7n/5rmWBLL3uoX9N4Kx1RVEzEMldQ6Vb3qPwMltdWv4Y1tqKTmqarpLXyopOZWXxsxDJj0/3kznWmqanz/NC6poX71EcOgSbX1a4gYhk2qa/VNfoRNqmn1zS96xSZVW33zKQUnVep3uXA/Ezbpsn6NEcPgSRf1a7uyFp1UavXNEcMKIJ1PVS1+VADpbKpqiRhWAulUv/Zr0gogvU9VLRHDiiAdW31bxLAySIdW33HzRhGkNFXVLtzPVAQp1a81YlgppF396hfuZyqEtH662f2oGFL2lZlWVUb9A66U3N4Ij0G4AAAAAElFTkSuQmCC"/>
				</defs>
				<use id="Layer 8"
					href="#img1"
					x="200"
					y="0"/>
				<use id="Layer 6"
					href="#img2"
					x="200"
					y="200"/>
				<use id="Layer 7"
					href="#img3"
					x="0"
					y="0"/>
				<use id="Layer 5"
					href="#img4"
					x="0"
					y="200"/>
				<use id="Layer 9"
					href="#img5"
					x="0"
					y="111"/>
			</svg>
			<div class="font-semibold text-xl">Enter verification code</div>
			<div>
				<span>We've sent you a code on </span>
				<span class="font-semibold">your@email.com</span></div>
			<code-verification-pin-input :length="codeLength"
				v-model="valueRef"></code-verification-pin-input>
			<div>
				<span>Didn't get a code? </span>
				<button @click="resend"
					class="font-semibold underline">Click to resent
				</button>
			</div>
			<hr class="w-full border-gray-400"/>
			<div class="flex w-full gap-4 p-4">
				<button class="py-1.5 border rounded font-semibold border-gray-400 w-full"
					@click="reset">
					Cancel
				</button>
				<button :disabled="!valueComplete"
					class="py-1.5 rounded font-semibold disabled:bg-gray-300 bg-[#fe47e1] text-white w-full"
					@click="verify">
					Verify
				</button>
			</div>
		</div>
	</div>
</template>

<style scoped>
.my-shadow {
	box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
}
</style>