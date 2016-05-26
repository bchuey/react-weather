var React = require('react');

var WeatherForm = React.createClass({
	// handling form submission
	onFormSubmit: function(e) {

		e.preventDefault();

		var location = this.refs.location.value; // grabs the value from the input

		// validating data
		if(location.length > 0)
		{
			this.refs.location.value = '';
			this.props.onSearch(location);
		}
	},

	render: function() {
		return (
			<div>
				<form onSubmit={this.onFormSubmit}>
					<input type="text" ref="location" />
					<input type="submit" className="button expanded hollow" value="Get Weather"/>
				</form>
			</div>
		);
	}

});

module.exports = WeatherForm;