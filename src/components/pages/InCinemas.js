import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchMovies } from '../../redux/actions';
import { END_POINTS } from '../../configs/keys';

import MovieSegment from '../MovieSegment';

const InCinemas = (props) => {
	useEffect(() => {
		props.fetchMovies(END_POINTS.TMDB.NOW_PLAYING);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <MovieSegment movies={props.movies} segmentTitle="In Cinemas" endPoint={END_POINTS.TMDB.NOW_PLAYING} />;
};

const mapStateToProps = (state) => {
	return {
		movies: Object.values(state.movies).filter((x) => x.endPoint === END_POINTS.TMDB.NOW_PLAYING)
	};
};

export default connect(mapStateToProps, { fetchMovies })(InCinemas);
