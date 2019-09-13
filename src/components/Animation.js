import React from 'react';
import Lottie from 'lottie-react-web';
import PropTypes from 'prop-types';

export default function Animation(props) {
	const { source, hidden, width, height, isStopped, isPaused, title, direction, speed, loop, autoplay } = props;

	return (
		<React.Fragment>
			{hidden ? null : (
				<Lottie
					options={{
						animationData: source,
						loop: loop === false ? loop : true,
						autoplay: autoplay === false ? autoplay : true
					}}
					width={width || null}
					height={height || null}
					isStopped={isStopped || false}
					isPaused={isPaused || false}
					title={title || null}
					direction={direction || null}
					speed={speed || 1}
					ariaRole="button"
				/>
			)}
		</React.Fragment>
	);
}

const withinTwo = (props, propName, componentName) => {
	if (props[propName] < 0 || props[propName] > 3) {
		return new Error(
			'Invalid prop `' +
				propName +
				'` supplied to' +
				' `' +
				componentName +
				'`. Validation failed. value should be between 0 - 3'
		);
	}
};

Animation.propTypes = {
	source: PropTypes.any.isRequired, // Lottie Json Animation File
	hidden: PropTypes.bool,
	width: PropTypes.number,
	height: PropTypes.number,
	isStopped: PropTypes.bool,
	isPaused: PropTypes.bool,
	title: PropTypes.string,
	direction: PropTypes.oneOf([ 1, -1 ]),
	speed: withinTwo,
	loop: PropTypes.bool,
	autoplay: PropTypes.bool
};
