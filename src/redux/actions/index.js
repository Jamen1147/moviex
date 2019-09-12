import movies from '../../apis/movies';
import { TYPES } from './types';
import { resolvedPromise } from '../../utils';

export const fetchMovies = (endPoint) => async (dispatch) => {
	const response = await resolvedPromise(movies.get(`/movie${endPoint}`));
	dispatch({
		type: TYPES.FETCH_MOVIES,
		payload: { result: response.data.results, endPoint: endPoint }
	});
};

export const fetchMovie = (id, endPoint) => async (dispatch) => {
	const response = await resolvedPromise(movies.get(`/movie/${id}`));
	dispatch({
		type: TYPES.FETCH_MOVIE,
		payload: { result: response.data, endPoint: endPoint }
	});
};
