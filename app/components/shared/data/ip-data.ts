import * as z from "zod";


export const IpResponseSchema = z.object({
	"ip": z.string(),
	"network": z.string(),
	"version": z.string(),
	"city": z.string(),
	"region": z.string(),
	"region_code": z.string(),
	"country": z.string(),
	"country_name": z.string(),
	"country_code": z.string(),
	"country_code_iso3": z.string(),
	"country_capital": z.string(),
	"country_tld": z.string(),
	"continent_code": z.string(),
	"in_eu": z.boolean(),
	"postal": z.null(),
	"latitude": z.number(),
	"longitude": z.number(),
	"timezone": z.string(),
	"utc_offset": z.string(),
	"country_calling_code": z.string(),
	"currency": z.string(),
	"currency_name": z.string(),
	"languages": z.string(),
	"country_area": z.number(),
	"country_population": z.number(),
	"asn": z.string(),
	"org": z.string(),
});
export type IpResponse = z.infer<typeof IpResponseSchema>;

export type Ip = {
	ip : string
	latitude : number
	longitude : number
}