import axios from 'axios';
import { KEYS } from '../configs/keys';

export default axios.create({
	baseURL: 'https://api.themoviedb.org/3',
	params: {
		api_key: KEYS.TMDB.API_KEY
	}
});
