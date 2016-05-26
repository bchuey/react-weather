// load in axios library
var axios = require('axios');

// generate base URL
// 81da84fe64204254137e7318c08109ce
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=81da84fe64204254137e7318c08109ce&units=imperial';

module.exports = {

	// return a function as a promise
	getTemp: function (location) {

		// encode location (i.e. turn a `space` => %20)
		var encodedLocation = encodeURIComponent(location);

		// build the url
		// ``
		// injecting parameters with ${}
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		// get the information
		// axios uses promises
		// putting `return` allows us to chain promises
		return axios.get(requestUrl).then(function(res) {
			if(res.data.cod && res.data.message) {
				throw new Error(res.data.message);
			} else {
				return res.data.main.temp;
			}
		}, function(res){
			throw new Error(res.data.message);

		});
	}
}