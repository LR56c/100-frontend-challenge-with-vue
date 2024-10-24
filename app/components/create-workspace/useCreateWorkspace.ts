import { ulid } from 'ulidx'

export type WorkspaceUser = {
	id: string
	name: string
	email: string
	avatar: string
}

export const useCreateWorkspace = defineStore( 'create-workspace', () => {

	const users = ref( new Map<string, WorkspaceUser>( [
			[ 'john@email.com',
				{
					id   : ulid(),
					name : 'John Doe',
					email: 'john@email.com',
					avatar: 'https://i.pravatar.cc/60?img=3'
				}
			],
			[ 'jane@email.com',
				{
					id   : ulid(),
					name : 'Jane Doe',
					email: 'jane@email.com',
					avatar: 'https://i.pravatar.cc/60?img=1'
				}
			]
		]
	) )

	const checkUser = ( email: string ): WorkspaceUser | undefined => {
		return users.value.get( email )
	}

	return {
		users,
		checkUser
	}
} )
