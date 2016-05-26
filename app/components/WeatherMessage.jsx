var React = require('react');

// var WeatherMessage = React.createClass({

// 	render: function() {
// 		// pull both variables off of this.props
// 		var {temp, location} = this.props;

// 		return (
// 			<h3>The temp in {location} is {temp}</h3>
// 		);
// 	}

// });


// destructure within the ({parameters})
var WeatherMessage = ({temp, location}) => {

	// var {temp, location} = props;
	return (
		<h3 className="text-center">The temp in {location} is {temp}</h3>
	);
};

module.exports = WeatherMessage;