import axios from 'axios';
import { isLatitude, isLongitude } from './mapbox-helpers';

const API_KEY = process.env.OPEN_WEATHER_KEY;

export async function currentWeatherData(lat: String, lon: String) {
	//Need HTTPS prefix in endpoint
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

	const result: any = await axios.get(url).catch((error: any) => {
		if (error.response) {
			//Request was successfully made but server responded with non-successful (not 2xx) status
			console.log(error.response.data);
			console.log(error.response.status);
			console.log(error.response.headers);
		} else if (error.request) {
			//Request was successfully made but received no response
			console.log(error.request);
		} else {
			//Request triggered error
			console.log('Error', error.message);
		}
	});

	return result.data;
}

export async function reverseWeather(req: any, res: any, next: any) {
	const latLon = req.params.latLon.split(',');
	if (!isLatitude(latLon[0]) || !isLongitude(latLon[1])) {
		res.status(400).send('Invalid lat/lon value(s)');
	}
	const weatherData = await currentWeatherData(latLon[0], latLon[1]);

	const mainTempC = weatherData.main.temp - 273.15;
	const mainTempF = (weatherData.main.temp - 273.15) * (9 / 5) + 32;
	const mainFeelsLikeC = weatherData.main.feels_like - 273.15;
	const mainFeelsLikeF = (weatherData.main.feels_like - 273.15) * (9 / 5) + 32;
	const mainHumidity = weatherData.main.humidity / 100;
	const mainClouds = weatherData.clouds.all / 100;

	const relevantData = {
		temp_c: mainTempC,
		temp_f: mainTempF,
		feels_like_c: mainFeelsLikeC,
		feels_like_f: mainFeelsLikeF,
		pop: mainHumidity,
		clouds: mainClouds,
	};

	if (res.locals.theOne) {
		res.locals.weather = relevantData || {};
		next();
	} else {
		res.send(relevantData || {});
	}
}
