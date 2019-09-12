import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';

import { FOOTER_LIST, FOOTER_LONG_CONTENT } from '../configs/footerList';
import { ROUTE_ITEMS } from '../configs/menu';

import Footer from './Footer';
import ResponsiveContainer from './ResponsiveContainer';
import { Header, Icon } from 'semantic-ui-react';

import Home from './pages/Home';
import Detail from './pages/Detail';
import InCinemas from './pages/InCinemas';
import UpComing from './pages/UpComing';
import Popular from './pages/Popular';
import TopRated from './pages/TopRated';
import More from './pages/More';

import NotFound404 from './pages/NotFound404';

export default () => {
	const Logo = () => {
		return (
			<div>
				<Icon name="film" size="big" />
				<br />
				<Header as="h2" inverted icon style={{ marginTop: 0 }}>
					R-MovieX
				</Header>
			</div>
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
					<Route path="*" exact component={NotFound404} />
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
