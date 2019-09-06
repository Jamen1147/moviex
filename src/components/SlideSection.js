import React, { useEffect, useState } from 'react';
import { Divider, Container, Image, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMovies } from '../redux/actions';
import ItemsCarousel from 'react-items-carousel';
import { KEYS } from '../configs/keys';
import { Link } from 'react-router-dom';

const SlideSection = ({ margin, sectionTitle, endPoint, ...props }) => {
	const [ activeIndex, setActiveIndex ] = useState(0);

	useEffect(() => {
		props.fetchMovies(endPoint);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const renderCards = (movies) => {
		return movies.map((movie, i) => {
			return (
				<div key={i}>
					<Link to={`/movie/${movie.id}`}>
						<Image src={`${KEYS.TMDB.IMG_URL}${movie.poster_path}`} size="medium" rounded bordered />
					</Link>
				</div>
			);
		});
	};

	const renderCardsSlider = (movies) => {
		return (
			<ItemsCarousel
				// Placeholder configurations
				enablePlaceholder
				numberOfPlaceholderItems={5}
				minimumPlaceholderTime={1000}
				// placeholderItem={<div style={{ height: 200, background: '#900' }}>Placeholder</div>}
				// Carousel configurations
				numberOfCards={3}
				gutter={12}
				showSlither={false}
				firstAndLastGutter={true}
				freeScrolling
				// Active item configurations
				requestToChangeActive={(val) => setActiveIndex(val)}
				activeItemIndex={activeIndex}
				activePosition={'center'}
				chevronWidth={60}
				rightChevron={'>'}
				leftChevron={'<'}
				outsideChevron={true}
			>
				{renderCards(movies)}
			</ItemsCarousel>
		);
	};

	return (
		<Container textAlign="center" style={{ margin: margin || null }}>
			<Divider as="h4" className="header" horizontal style={{ margin: '2em 0em', textTransform: 'uppercase' }}>
				{sectionTitle}
			</Divider>
			{renderCardsSlider(props.movies)}
			<Button style={{ marginTop: 20 }} basic color="black" as="a" size="small" content="More" />
		</Container>
	);
};

SlideSection.propTypes = {
	margin: PropTypes.string,
	sectionTitle: PropTypes.string.isRequired,
	endPoint: PropTypes.string.isRequired
};

const mapStateToProps = (state, ownProps) => {
	return {
		movies: Object.values(state.movies).filter((x) => x.endPoint === ownProps.endPoint)
	};
};

export default connect(mapStateToProps, { fetchMovies })(SlideSection);
