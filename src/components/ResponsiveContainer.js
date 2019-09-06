import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import DesktopContainer from './DesktopContainer';
import MobileContainer from './MobileContainer';
import { MENU_ITEMS } from '../configs/menu';
import { END_POINTS, KEYS } from '../configs/keys';
import { fetchMovies } from '../redux/actions';
import { connect } from 'react-redux';

const random = Math.floor(Math.random() * 10);

const ResponsiveContainer = ({ children, ...props }) => {
	useEffect(() => {
		props.fetchMovies(END_POINTS.TMDB.NOW_PLAYING);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (props.movies.length >= 1) {
		const imgNum = props.movies.length > random ? random : 0;
		const deskImg = `${KEYS.TMDB.IMG_URL_HIGH}${props.movies[imgNum].poster_path}`;
		const mobileImg = `${KEYS.TMDB.IMG_URL_MID}${props.movies[imgNum].poster_path}`;
		return (
			<div>
				<DesktopContainer menuItems={MENU_ITEMS} imgSrc={deskImg}>
					{children}
				</DesktopContainer>
				<MobileContainer menuItems={MENU_ITEMS} imgSrc={mobileImg}>
					{children}
				</MobileContainer>
			</div>
		);
	}

	return (
		<div>
			<DesktopContainer menuItems={MENU_ITEMS}>{children}</DesktopContainer>
			<MobileContainer menuItems={MENU_ITEMS}>{children}</MobileContainer>
		</div>
	);
};

ResponsiveContainer.propTypes = {
	children: PropTypes.node
};

const mapStateToProps = (state) => {
	return {
		movies: Object.values(state.movies).filter((x) => x.endPoint === END_POINTS.TMDB.NOW_PLAYING)
	};
};

export default connect(mapStateToProps, { fetchMovies })(ResponsiveContainer);
