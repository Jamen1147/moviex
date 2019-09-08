import React from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Header, Icon } from 'semantic-ui-react';

export default function HomepageHeading({ isMobile }) {
	return (
		<Container text>
			<Header
				as="h1"
				content="Welcome to R-MovieX"
				inverted
				style={{
					fontSize: isMobile ? '2em' : '4em',
					fontWeight: 'normal',
					marginBottom: 0,
					marginTop: isMobile ? '1.5em' : '3em'
				}}
			/>
			<Header
				as="h2"
				content="This is a movie website example built with React, Redux and Semantic-UI"
				inverted
				style={{
					fontSize: isMobile ? '1.5em' : '1.7em',
					fontWeight: 'normal',
					marginTop: isMobile ? '0.5em' : '1.5em'
				}}
			/>
			<Button primary size="huge" style={{ marginTop: 25 }}>
				Explore
				<Icon name="right arrow" />
			</Button>
		</Container>
	);
}

HomepageHeading.propTypes = {
	isMobile: PropTypes.bool
};
