export const weatherIconParser = ( code : number ) : string => {
	if(code >= 900 || code >= 200 && code < 800){
		return 'fluent-emoji-sun-behind-rain-cloud'
	}
	if(code === 800){
		return 'fluent-emoji-sun'
	}
	return 'fluent-emoji-sun-behind-cloud'
}
export const weatherDescriptionParser = ( code : number ) : string => {
	if(code >= 900 || code >= 200 && code < 800){
		return 'Rain'
	}
	if(code === 800){
		return 'Clear sky'
	}
	return 'Sun with occasional clouds'
}
