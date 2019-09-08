import React from 'react';
import { List, Segment, Container, Header, Grid, Divider } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default function Footer({ col1Items, col2Items, longContent, logo, logoText }) {
	const renderColumn = (content) => {
		if (content) {
			return (
				<Grid.Column width={col2Items ? 3 : 5}>
					<Header inverted as="h4" content={content.name} />
					<List link inverted>
						{content.list.map((item, i) => {
							return (
								<List.Item key={i}>
									<a href={item.url} rel="noopener noreferrer" target="_blank">
										{item.name}
									</a>
								</List.Item>
							);
						})}
					</List>
				</Grid.Column>
			);
		}
	};

	return (
		<Segment inverted vertical style={{ padding: '5em 0em 1.5em 0em' }}>
			<Container textAlign="center">
				<Grid divided inverted stackable>
					<Grid.Row>
						{renderColumn(col1Items)}
						{renderColumn(col2Items)}
						<Grid.Column width={col2Items ? 7 : 8}>
							<Header as="h4" inverted>
								{longContent.header}
							</Header>
							<p>{longContent.content}</p>
							<p>
								Note: Any hard refreshes on routes that are not the default route (Home) will lead to
								404. For more info please check out this{' '}
								<a
									href="https://itnext.io/so-you-want-to-host-your-single-age-react-app-on-github-pages-a826ab01e48"
									rel="noopener noreferrer"
									target="_blank"
								>
									Article
								</a>{' '}
							</p>
						</Grid.Column>
					</Grid.Row>
				</Grid>
				<Divider inverted section style={{ marginBottom: 25 }} />
				{logo}
				<p style={{ marginTop: 30 }}>{logoText}</p>
			</Container>
		</Segment>
	);
}

Footer.propTypes = {
	col1Items: PropTypes.shape({
		name: PropTypes.string.isRequired,
		list: PropTypes.arrayOf(
			PropTypes.shape({
				name: PropTypes.string.isRequired,
				url: PropTypes.string.isRequired
			}).isRequired
		).isRequired
	}).isRequired,
	col2Items: PropTypes.shape({
		name: PropTypes.string.isRequired,
		list: PropTypes.arrayOf(
			PropTypes.shape({
				name: PropTypes.string.isRequired,
				url: PropTypes.string.isRequired
			}).isRequired
		).isRequired
	}),
	longContent: PropTypes.shape({
		header: PropTypes.string.isRequired,
		content: PropTypes.string.isRequired
	}).isRequired,
	logo: PropTypes.node.isRequired,
	logoText: PropTypes.string
};
