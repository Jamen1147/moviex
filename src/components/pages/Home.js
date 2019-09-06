import React from 'react';
import { Segment } from 'semantic-ui-react';
import { END_POINTS } from '../../configs/keys';
import SlideSection from '../SlideSection';

export default function Home() {
	return (
		<div>
			<Segment vertical style={{ padding: '5em 0em' }}>
				<SlideSection sectionTitle="In Cinemas" endPoint={END_POINTS.TMDB.NOW_PLAYING} />
				<SlideSection sectionTitle="Up Comings" endPoint={END_POINTS.TMDB.UP_COMING} margin="70px 0 0 0" />
				<SlideSection sectionTitle="Popular" endPoint={END_POINTS.TMDB.POPULAR} margin="70px 0 0 0" />
				<SlideSection sectionTitle="Top Rated" endPoint={END_POINTS.TMDB.TOP_RATED} margin="70px 0 0 0" />
			</Segment>
		</div>
	);
}
