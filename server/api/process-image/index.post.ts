import {
	defineEventHandler,
	MultiPartData
} from 'h3'
import { Readable } from 'node:stream'
import sharp from 'sharp'
import { ExportFileFormatButtonsType } from '~/components/export-file/ExportFileFormatButtons.vue'

function delay(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

export type ImageStreamChunk = Uint8Array | { progress: number }

async function parseForm( data: MultiPartData[] | undefined ) {
	const form = new FormData()
	data?.forEach( ( value ) => {
		if ( value.name && value.data ) {
			if ( value.type ) {
				const blob = new Blob( [ value.data ], { type: value.type } )
				form.append( value.name, blob )
			}
			else {
				form.append( value.name, value.data.toString() )
			}
		}
	} )
	return form
}

export default defineEventHandler( async ( event ) => {
	const body = await readMultipartFormData( event )
	const form = await parseForm( body )

	const file = form.get( 'image' ) as File
	const data = {
		size   : Number( form.get( 'size' ) ),
		format : form.get( 'format' ) as ExportFileFormatButtonsType,
		quality: Number( form.get( 'quality' ) )
	}

	event.node.res.setHeader( 'Content-Type', 'text/event-stream' )
	event.node.res.setHeader( 'Cache-Control', 'no-cache' )
	event.node.res.setHeader( 'Connection', 'keep-alive' )

	const fileBuffer = Buffer.from( await file.arrayBuffer() )
	const metadata   = await sharp( fileBuffer )
		.metadata()

	if ( !metadata.format ) {
		throw new Error( 'Invalid image format' )
	}

	const resizeWidth = Math.floor(metadata.width! * data.size)
	const resizeHeight = Math.floor(metadata.height! * data.size)
	const estimatedSize = fileBuffer.length * data.size ** 2
	console.log('estimatedSize', estimatedSize, metadata.size)
	let processedBytes = 0

	return new ReadableStream<ImageStreamChunk>({
		async start(controller) {
			const transform = sharp(fileBuffer)
				.resize(resizeWidth, resizeHeight)
				.toFormat(data.format, { quality: data.quality })


			console.log('pre')
			try {
				const chunks : any = []
				for await (const chunk of transform) {
					console.log('minichunk')
					processedBytes += chunk.length
					chunks.push(chunk)
					const progress = Math.min(
						Math.round((processedBytes / estimatedSize) * 100),
						100
					)
					controller.enqueue(
						new TextEncoder().encode(JSON.stringify({ progress }) + '\n')
					)
					// controller.enqueue(chunk)
					console.log('progress', progress)
				}
					console.log('minichunk complete')

				console.log('chunks', chunks.length)
				for ( const chunk of chunks ) {
					controller.enqueue(chunk)
				}
			} catch (error) {
				console.log('error', error)
				controller.error(error)
			} finally {
				console.log('finally')
				controller.close()
			}
		}
	})
} )
