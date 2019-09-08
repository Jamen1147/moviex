import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMovie } from '../../redux/actions';
import { KEYS } from '../../configs/keys';
import { scrollToTop } from '../../utils';

import { Segment, Grid, Header, Rating, Card, Responsive } from 'semantic-ui-react';

const Detail = (props) => {
	const { id, endPoint } = props.match.params;

	useEffect(() => {
		props.fetchMovie(id, '/' + endPoint);
		scrollToTop();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const isMobile = window.innerWidth <= Responsive.onlyTablet.minWidth;

	if (props.movie) {
		const deskImg = `${KEYS.TMDB.IMG_URL_HIGH}${props.movie.poster_path}`;
		const cardImg = `${KEYS.TMDB.IMG_URL}${props.movie.poster_path}`;

		const Rate = () => {
			const rate = Math.round(props.movie.vote_average);
			return <Rating size="tiny" defaultRating={rate} maxRating={10} disabled />;
		};

		console.log(props.movie);

		return (
			<Segment vertical style={{ padding: '5em 0em' }}>
				<Segment inverted vertical style={{ padding: '3em 0em', opacity: '0.9', height: isMobile ? 600 : 420 }}>
					<Grid divided inverted stackable>
						<Grid.Row textAlign="center">
							<Grid.Column width={6} textAlign="center">
								<Card centered image={cardImg} style={{ width: 200 }} extra={<Rate />} />
							</Grid.Column>
							<Grid.Column width={10} style={{ alignSelf: 'center' }}>
								<Header inverted size="large">
									{props.movie.title}
									{` (${props.movie.release_date.split('-')[0]})`}
								</Header>
								<Header inverted size="small" style={{ padding: '0em 1em' }}>
									{props.movie.overview}
								</Header>
							</Grid.Column>
						</Grid.Row>
					</Grid>

					<Segment
						vertical
						style={{
							padding: '3em 0em',
							opacity: '0.3',
							height: isMobile ? 600 : 420,
							width: '100%',
							backgroundImage: `url(${deskImg})`,
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							position: 'absolute',
							top: 0,
							zIndex: -1
						}}
					/>
				</Segment>
			</Segment>
		);
	}

	return (
		<Segment vertical style={{ padding: '5em 0em' }}>
			<Segment inverted vertical style={{ padding: '3em 0em', opacity: '0.9', minHeight: 500 }}>
				Loading..
			</Segment>
		</Segment>
	);
};

const mapStateToProps = (state, ownProps) => {
	const { id, endPoint } = ownProps.match.params;
	const key = `/${endPoint}_${id}`;
	return {
		movie: state.movies[key]
	};
};

export default connect(mapStateToProps, { fetchMovie })(Detail);
