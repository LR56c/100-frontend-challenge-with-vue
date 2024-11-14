import { ulid } from 'ulidx'

export type NodeType = 'folder' | 'note'

interface BaseNode {
	id: string
	name: string
	parentId: string | undefined
	type: NodeType
	countContent: number
}

export interface FolderNode extends BaseNode {
	type: 'folder'
	children: Array<DocumentNode>
}

export interface NoteNode extends BaseNode {
	type: 'note'
	content: string
}

export type DocumentNode = FolderNode | NoteNode

const countWords = ( content: string ): number => {
	return content.split( /\s+/ ).length
}

export const useDocumentManager = defineStore( 'document-manager', () => {

	const id1         = ulid()
	const id2         = ulid()
	const content1_1  = 'Liberis ridetis in camerarius lentia!Clinias de primus classis, reperire exemplar!'
	const content1_2  = 'Pol, a bene contencio, barbatus galatae!'
	const content1_3  = 'Est varius cursus, cesaris.'
	const count1_1    = countWords( content1_1 )
	const count1_2    = countWords( content1_2 )
	const count1_3    = countWords( content1_3 )
	const count1total = count1_1 + count1_2 + count1_3
	const content2    = 'Est varius cursus, cesaris.'
	const count2      = countWords( content2 )
	const file1       = ulid()
	const file2       = ulid()
	const file3       = ulid()
	const file4       = ulid()

	const id3_0        = ulid()
	const id3_1        = ulid()
	const rootId       = ulid()
	const documentRoot = ref<FolderNode>( {
		id          : rootId,
		name        : 'Root',
		parentId    : undefined,
		type        : 'folder',
		countContent: 0,
		children    : [
			{
				id          : id1,
				name        : 'Mastering Productivity',
				parentId    : rootId,
				type        : 'folder',
				countContent: count1total,
				children    : [
					{
						id          : file1,
						name        : 'Intro',
						parentId    : id1,
						type        : 'note',
						content     : content1_1,
						countContent: count1_1
					},
					{
						id          : file2,
						name        : 'Chapter 1',
						parentId    : id1,
						type        : 'note',
						content     : content1_2,
						countContent: count1_2
					},
					{
						id          : file3,
						name        : 'Chapter 2',
						parentId    : id1,
						type        : 'note',
						content     : content1_3,
						countContent: count1_3
					}
				]
			},
			{
				id          : id2,
				name        : 'The Art of Effect',
				parentId    : rootId,
				type        : 'folder',
				countContent: count2,
				children    : [
					{
						id          : file4,
						name        : 'Intro',
						parentId    : id2,
						type        : 'note',
						content     : content2,
						countContent: count2
					}
				]
			},
			{
				id          : id3_0,
				name        : 'Subfolder',
				parentId    : rootId,
				type        : 'folder',
				countContent: 0,
				children    : [
					{
						id          : id3_1,
						name        : 'Intro',
						parentId    : id3_0,
						type        : 'folder',
						countContent: 0,
						children    : [
							{
								id          : ulid(),
								name        : 'Point',
								parentId    : id3_1,
								type        : 'note',
								countContent: 0,
								content     : ''
							}
						]
					}
				]
			}
		]
	} )

	const currentDocument = ref<DocumentNode | undefined>( undefined )

	const getNode = ( id: string,
		subFolder ?: FolderNode ): DocumentNode | undefined => {
		const folder: FolderNode = subFolder ?? documentRoot.value
		if ( folder.id === id ) {
			return folder
		}
		for ( const node of folder.children ) {
			if ( node.id === id ) {
				return node
			}
			if ( node.type === 'folder' ) {
				const foundNode = getNode( id, node )
				if ( foundNode ) {
					return foundNode
				}
			}
		}
		return undefined
	}

	const addNode = ( name: string, nodeType: NodeType,
		subID ?: string ): boolean => {
		const node = getNode( subID ?? documentRoot.value.id )

		if ( !node || node.type !== 'folder' ) {
			return false
		}

		let newNode: DocumentNode | undefined = undefined

		if ( nodeType === 'note' ) {
			newNode = {
				id          : ulid(),
				name        : name,
				parentId    : node.id,
				type        : nodeType,
				countContent: 0,
				content     : ''
			}
		}
		else {
			newNode = {
				id          : ulid(),
				name        : name,
				parentId    : node.id,
				type        : nodeType,
				countContent: 0,
				children    : []
			}
		}

		node.children.push( newNode )
		return true
	}

	const updateNote = ( id: string, name : string, content: string,
		subFolder ?: FolderNode ): boolean => {
		const node = getNode( id, subFolder )

		if ( !node || node.type !== 'note' || !node.parentId ) {
			return false
		}

		const parent = getNode( node.parentId )
		if ( !parent || parent.type !== 'folder' ) {
			return false
		}

		node.name           = name
		node.content        = content
		node.countContent   = countWords( content )
		parent.countContent =
			parent.children.reduce( ( acc, n ) => acc + n.countContent, 0 )
		return true
	}

	const removeNode = ( id: string, subFolder ?: FolderNode ): boolean => {
		const node = getNode( id, subFolder )

		if ( !node || !node.parentId ) {
			return false
		}

		const parent = getNode( node.parentId )
		if ( !parent || parent.type !== 'folder' ) {
			return false
		}

		if ( node.id === currentDocument.value?.id ) {
			currentDocument.value = undefined
		}

		parent.children = parent.children.filter( n => n.id !== id )
		parent.countContent =
			parent.children.reduce( ( acc, n ) => acc + n.countContent, 0 )
		return true
	}

	const selectCurrentNode = ( documentNode: DocumentNode ): void => {
		currentDocument.value = documentNode
	}

	return {
		documents      : readonly( documentRoot.value.children ),
		currentDocument: readonly( currentDocument ),
		getNode,
		addNode,
		updateNote,
		removeNode,
		selectCurrentNode
	}
} )