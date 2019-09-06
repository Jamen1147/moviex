import movies from '../../apis/movies';
import { TYPES } from './types';

export const fetchMovies = (type) => async (dispatch) => {
	const response = await movies.get(`/movie${type}`);
	dispatch({
		type: TYPES.FETCH_MOVIES,
		payload: { result: response.data.results, endPoint: type }
	});
};
