import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react';

import { fetchMovies } from '../../redux/actions';
import { END_POINTS } from '../../configs/keys';

import MovieSegment from '../MovieSegment';

const InCinemas = (props) => {
	useEffect(() => {
		props.fetchMovies(END_POINTS.TMDB.NOW_PLAYING);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (props.movies) {
		return <MovieSegment movies={props.movies} segmentTitle="In Cinemas" endPoint={END_POINTS.TMDB.NOW_PLAYING} />;
	}

	return <Segment loading style={{ padding: '8em 2em' }} />;
};

const mapStateToProps = (state) => {
	return {
		movies: Object.values(state.movies).filter((x) => x.endPoint === END_POINTS.TMDB.NOW_PLAYING)
	};
};

export default connect(mapStateToProps, { fetchMovies })(InCinemas);
