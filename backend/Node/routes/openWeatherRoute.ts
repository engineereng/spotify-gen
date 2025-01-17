import express from 'express';
import { reverseWeather } from './route-helpers/openweather-helpers';

const router = express.Router();

router.get('/', (req, res) => {
	res.send('Open Weather API');
});

router.get('/reverseWeather/:latLon', reverseWeather);

module.exports = router;
