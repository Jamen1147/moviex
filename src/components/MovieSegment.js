import React from 'react';
import PropTypes from 'prop-types';
import { KEYS } from '../configs/keys';
import { Card, Grid, Container, Responsive, Divider, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function MovieSegment({ movies, segmentTitle, endPoint }) {
	const innerWidth = window.innerWidth;
	const width = innerWidth >= Responsive.onlyTablet.minWidth ? 4 : 8;

	const renderColumns = (movies) => {
		return movies.map((movie, i) => {
			return (
				<Grid.Column width={width} key={i}>
					<Container>
						<Link to={`/movie/${movie.id}/${endPoint.substring(1, endPoint.length)}`}>
							<Card
								link
								centered
								image={`${KEYS.TMDB.IMG_URL}${movie.poster_path}`}
								style={{ marginTop: '20px' }}
								extra={<p style={{ fontSize: 10 }}>{movie.title}</p>}
							/>
						</Link>
					</Container>
				</Grid.Column>
			);
		});
	};

	return (
		<Segment vertical style={{ padding: '8em 2em' }}>
			<Divider
				as="h4"
				className="header"
				horizontal
				style={{ margin: '0em 0em 2em 0em', textTransform: 'uppercase' }}
			>
				{segmentTitle}
			</Divider>
			<Grid>
				<Grid.Row>{renderColumns(movies)}</Grid.Row>
			</Grid>
		</Segment>
	);
}

MovieSegment.prototype = {
	movies: PropTypes.array.isRequired,
	segmentTitle: PropTypes.string.isRequired,
	endPoint: PropTypes.string.isRequired
};
