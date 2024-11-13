import { IpResponseSchema } from '~/components/shared/data/ip-data'
import type {
	Ip
} from '~/components/shared/data/ip-data'
import type { IpRepository } from '~/components/shared/data/ip-repository'

export class IpApiData implements IpRepository {
	getIp(): Promise<Ip> {
		const response = await fetch( `https://ipapi.co/json` )
		const data     = IpResponseSchema.safeParse( await response.json() )

		if ( !data.success ) {
			throw new Error( 'Invalid response' )
		}
		const ipResponse = data.data

		const ipResult: Ip = {
			ip       : ipResponse.ip,
			latitude : ipResponse.latitude,
			longitude: ipResponse.longitude
		}

		return ipResult
	}

}