import * as z from "zod";


export const WeatherInfoSchema = z.object({
	"code": z.number(),
	"icon": z.string(),
	"description": z.string(),
});
export type WeatherInfo = z.infer<typeof WeatherInfoSchema>;

export const WeatherSchema = z.object({
	"app_max_temp": z.number(),
	"app_min_temp": z.number(),
	"clouds": z.number(),
	"clouds_hi": z.number(),
	"clouds_low": z.number(),
	"clouds_mid": z.number(),
	"datetime": z.string(),
	"dewpt": z.number(),
	"high_temp": z.number(),
	"low_temp": z.number(),
	"max_dhi": z.null(),
	"max_temp": z.number(),
	"min_temp": z.number(),
	"moon_phase": z.number(),
	"moon_phase_lunation": z.number(),
	"moonrise_ts": z.number(),
	"moonset_ts": z.number(),
	"ozone": z.number(),
	"pop": z.number(),
	"precip": z.number(),
	"pres": z.number(),
	"rh": z.number(),
	"slp": z.number(),
	"snow": z.number(),
	"snow_depth": z.number(),
	"sunrise_ts": z.number(),
	"sunset_ts": z.number(),
	"temp": z.number(),
	"ts": z.number(),
	"uv": z.number(),
	"valid_date": z.string(),
	"vis": z.number(),
	"weather": WeatherInfoSchema,
	"wind_cdir": z.string(),
	"wind_cdir_full": z.string(),
	"wind_dir": z.number(),
	"wind_gust_spd": z.number(),
	"wind_spd": z.number(),
});
export type Weather = z.infer<typeof WeatherSchema>;

export const WeatherResponseSchema = z.object({
	"city_name": z.string(),
	"country_code": z.string(),
	"data": z.array(WeatherSchema),
	"lat": z.number(),
	"lon": z.number(),
	"state_code": z.string(),
	"timezone": z.string(),
});
export type WeatherResponse = z.infer<typeof WeatherResponseSchema>;
