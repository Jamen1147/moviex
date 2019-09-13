import React from 'react';
import { Segment, Header, Button, Icon } from 'semantic-ui-react';
import Animation from '../Animation';
import bg from '../../assets/img/page404.jpg';
import warning from '../../assets/animations/warning.json';

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

				<span >
					<Animation source={warning} width={160} />
				</span>

				<Button as="a" href="https://www.disney.com.au/" inverted color="red">
					Run Away
				</Button>
			</Segment>
		</React.Fragment>
	);
}
