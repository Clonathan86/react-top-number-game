var React = require('react');

function Display(props) {

	var visibility = props.number  > 0 ? 'visible' : 'hidden';

	var style = {
		fontSize: 110,
		color:    'white',
		position: 'absolute',
		top: '10%',
		visibility: visibility
	};

	return (
		<div style={style}>
			{props.number}
		</div>
	);
};

module.exports = Display;
