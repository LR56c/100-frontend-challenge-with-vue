import { ulid } from 'ulidx'

export type Shot = {
	id : string
	avatar : string
	count : number
	name : string
	updateDate : Date
}

export const useAddShot = defineStore( 'add-shot', () => {

	const shotsDatabase = ref<Shot[]>([
		{
			id: ulid(),
			avatar: 'https://i.pravatar.cc/60?img=2',
			count: 0,
			name: 'Shot 1',
			updateDate: new Date( new Date().setMonth( new Date().getMonth() - 1 ) )
		},
		{
			id: ulid(),
			avatar: 'https://i.pravatar.cc/60?img=5',
			count: 0,
			name: 'Shot 2',
			updateDate: new Date( new Date().setDate( new Date().getDate() - 7 ) )
		},
	])

	const shots = ref<Shot[]>()


	onMounted( () => {
		shots.value = shotsDatabase.value
	})

	const searchShot = ( name : string ) => {
		shots.value = shotsDatabase.value.filter( shot => shot.name.includes( name ) )
	}

	return {
		shots : readonly(shots),
		searchShot
	}
})