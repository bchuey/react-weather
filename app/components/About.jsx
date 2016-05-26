var React = require('react');

// refactored with => function
var About = (props) => {
	return (
		<div>
			<h1 className="text-center">About</h1>
			<p>This app retrieves the weather for whatever location you wish</p>
			
		</div>
	);
};

// var About = React.createClass({

// 	render: function() {
// 		return (
// 			<h3>About Component</h3>
// 		);
// 	}

// });

module.exports = About;