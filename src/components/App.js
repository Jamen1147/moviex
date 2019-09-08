import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';

import { FOOTER_LIST, FOOTER_LONG_CONTENT } from '../configs/footerList';
import { ROUTE_ITEMS } from '../configs/menu';

import Footer from './Footer';
import ResponsiveContainer from './ResponsiveContainer';
import { Header, Icon, Container } from 'semantic-ui-react';

import Home from './pages/Home';
import Detail from './pages/Detail';
import InCinemas from './pages/InCinemas';
import UpComing from './pages/UpComing';
import Popular from './pages/Popular';
import TopRated from './pages/TopRated';
import More from './pages/More';

export default () => {
	const Logo = () => {
		return (
			<Container>
				<Header inverted as="h3" icon style={{ marginTop: 0 }} onClick={() => history.push(ROUTE_ITEMS.HOME)}>
					<Icon name="film" size="tiny" />
					R-MovieX
				</Header>
			</Container>
		);
	};

	return (
		<Router history={history}>
			<ResponsiveContainer>
				<Switch>
					<Route path={`${ROUTE_ITEMS.HOME}`} exact component={Home} />
					<Route path={`${ROUTE_ITEMS.IN_CINEMAS}`} exact component={InCinemas} />
					<Route path={`${ROUTE_ITEMS.POPULAR}`} exact component={Popular} />
					<Route path={`${ROUTE_ITEMS.TOP_RATED}`} exact component={TopRated} />
					<Route path={`${ROUTE_ITEMS.UP_COMING}`} exact component={UpComing} />
					<Route path={`${ROUTE_ITEMS.DETAIL}`} exact component={Detail} />
					<Route path={`${ROUTE_ITEMS.MORE}`} exact component={More} />
				</Switch>
				<Footer
					col1Items={FOOTER_LIST.tech}
					longContent={FOOTER_LONG_CONTENT}
					logo={<Logo />}
					logoText="By Jamen H"
				/>
			</ResponsiveContainer>
		</Router>
	);
};
