import React from 'react';
import { Segment, Header, Button, Icon } from 'semantic-ui-react';
import bg from '../../img/page404.jpg';

export default function NotFound404() {
	return (
		<React.Fragment>
			<Segment
				textAlign="center"
				vertical
				style={{ padding: '8em 0em', minHeight: 700, backgroundColor: 'black', opacity: '0.9' }}
			>
				<Segment
					style={{
						backgroundImage: `url(${bg})`,
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						position: 'absolute',
						top: 0,
						left: 0,
						zIndex: -1,
						minHeight: 700,
						width: '100%',
						opacity: 0.5,
						borderRadius: '0px'
					}}
				/>
				<Header inverted as="h1">
					{`YOU ARE NOW IN `}
					<p style={{ color: 'red' }}>
						ZONE 404 <Icon name="warning sign" />
					</p>
				</Header>

				<Button as="a" href="https://www.disney.com.au/" inverted color="red">
					Go Home
				</Button>
			</Segment>
		</React.Fragment>
	);
}
