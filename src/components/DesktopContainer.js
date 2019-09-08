import React, { useState } from 'react';
import PropTypes from 'prop-types';
import HomepageHeading from './HomepageHeading';
import { Container, Menu, Responsive, Segment, Visibility, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const DesktopContainer = ({ children, menuItems, imgSrc, currentRoute, shouldShowBigHeader }) => {
	const [ fixed, setFixed ] = useState(false);

	const hideFixedMenu = () => setFixed(false);
	const showFixedMenu = () => setFixed(true);

	const scrollToTop = () =>
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		});

	const getWidth = () => {
		const isSSR = typeof window === 'undefined';
		return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
	};

	const renderMenuItems = () => {
		return menuItems.map((item, i) => {
			return (
				<Menu.Item key={i} active={currentRoute === item.link}>
					<Link to={item.link}>{item.name}</Link>
				</Menu.Item>
			);
		});
	};

	const renderUpBtn = () => {
		if (fixed) {
			return (
				<Menu.Item onClick={scrollToTop} position="right" style={{ position: 'absolute', right: 0 }}>
					<Icon name="up arrow" />
				</Menu.Item>
			);
		}
	};

	const renderBackgroundImage = () => {
		if (imgSrc && shouldShowBigHeader) {
			return (
				<Segment
					style={{
						backgroundImage: `url(${imgSrc})`,
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						position: 'absolute',
						top: 0,
						left: 0,
						zIndex: fixed ? 10 : -1,
						minHeight: 700,
						width: '100%',
						opacity: 0.2,
						borderRadius: '0px'
					}}
				/>
			);
		}
	};

	return (
		<Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
			<Visibility once={false} onBottomPassed={showFixedMenu} onBottomPassedReverse={hideFixedMenu}>
				<Segment
					inverted
					textAlign="center"
					style={{
						minHeight: shouldShowBigHeader ? 700 : 75,
						padding: '1em oem',
						borderRadius: '0px',
						opacity: fixed ? 1 : 0.9,
						backgroundColor: 'black'
					}}
				>
					{renderBackgroundImage()}
					<Menu
						fixed={fixed ? 'top' : null}
						inverted={!fixed}
						pointing={!fixed}
						secondary={!fixed}
						size="large"
					>
						<Container>
							{renderMenuItems()}
							{renderUpBtn()}
						</Container>
					</Menu>
					{shouldShowBigHeader ? <HomepageHeading /> : ''}
				</Segment>
			</Visibility>
			{children}
		</Responsive>
	);
};

DesktopContainer.propTypes = {
	children: PropTypes.node,
	menuItems: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			link: PropTypes.string.isRequired
		}).isRequired
	).isRequired,
	imgSrc: PropTypes.string,
	currentRoute: PropTypes.string.isRequired,
	shouldShowBigHeader: PropTypes.bool.isRequired
};

export default DesktopContainer;
