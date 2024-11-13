import type { Ip } from '~/components/shared/data/ip-data'

export interface IpRepository {
		getIp(): Promise<Ip>
}