import React, { useState } from 'react';
import PropTypes from 'prop-types';
import HomepageHeading from './HomepageHeading';
import { Container, Icon, Menu, Responsive, Segment, Sidebar } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function MobileContainer({ children, menuItems, imgSrc, currentRoute, shouldShowBigHeader }) {
	const [ sidebarOpened, setSidebar ] = useState(false);
	const [ visible, setVisible ] = useState(false);

	const hideSidebar = () => setSidebar(false);

	const showSidebar = () => {
		setSidebar(true);
		setVisible(true);
	};

	const getWidth = () => {
		const isSSR = typeof window === 'undefined';
		return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
	};

	const renderMenuItems = () => {
		return menuItems.map((item, i) => {
			return (
				<Menu.Item active={currentRoute === item.link} key={i}>
					<Link to={item.link}>{item.name}</Link>
				</Menu.Item>
			);
		});
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
						zIndex: -1,
						minHeight: 350,
						width: '100%',
						opacity: 0.2,
						borderRadius: '0px'
					}}
				/>
			);
		}
	};

	const manualHide = () => {
		if (visible) {
			hideSidebar();
			setVisible(false);
		}
	};

	return (
		<Responsive as={Sidebar.Pushable} getWidth={getWidth} maxWidth={Responsive.onlyMobile.maxWidth}>
			<Sidebar as={Menu} animation="push" inverted onHide={hideSidebar} vertical visible={sidebarOpened}>
				{renderMenuItems()}
			</Sidebar>
			<Sidebar.Pusher dimmed={visible} onClick={() => manualHide()}>
				<Segment
					inverted
					textAlign="center"
					style={{
						minHeight: shouldShowBigHeader ? 350 : 75,
						padding: '1em 0em',
						borderRadius: '0px',
						opacity: 0.9,
						backgroundColor: 'black'
					}}
					vertical
				>
					{renderBackgroundImage()}
					<Container>
						<Menu inverted pointing secondary size="large">
							<Menu.Item onClick={showSidebar}>
								<Icon name="sidebar" />
							</Menu.Item>
						</Menu>
					</Container>
					{shouldShowBigHeader ? <HomepageHeading isMobile /> : ''}
				</Segment>
				{children}
			</Sidebar.Pusher>
		</Responsive>
	);
}

MobileContainer.propTypes = {
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
