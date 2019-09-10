import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react';

import { fetchMovies } from '../../redux/actions';
import { END_POINTS } from '../../configs/keys';

import MovieSegment from '../MovieSegment';

const UpComing = (props) => {
	useEffect(() => {
		props.fetchMovies(END_POINTS.TMDB.UP_COMING);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (props.movies) {
		return <MovieSegment movies={props.movies} segmentTitle="Up Coming" endPoint={END_POINTS.TMDB.UP_COMING} />;
	}

	return <Segment loading style={{ padding: '8em 2em' }} />;
};

const mapStateToProps = (state) => {
	return {
		movies: Object.values(state.movies).filter((x) => x.endPoint === END_POINTS.TMDB.UP_COMING)
	};
};

export default connect(mapStateToProps, { fetchMovies })(UpComing);
