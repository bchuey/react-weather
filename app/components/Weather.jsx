var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({

	getInitialState: function(){
		return {
			isLoading: false,
		}
	},

	// create parent function for WeatherForm
	// handleSearch => onSearch parent
	handleSearch: function(location){
		// this.setState({
		// 	location: location,
		// 	temp: 23,
		// });

		// give access to `this` keyword within below function
		var that = this;

		this.setState({
			isLoading: true,
			errorMessage: undefined,
			location: undefined,
			temp: undefined,
		});

		// call getTemp function from openWeatherMap
		openWeatherMap.getTemp(location).then(function(temp){

			that.setState({
				isLoading: false,
				location: location,
				temp: temp,

			});
		}, function(e){

			that.setState({
				isLoading: false,
				errorMessage: e.message,
			});

		});
	},
	componentDidMount: function (){

		// can access the query strings through props
		var location = this.props.location.query.location;

		// search trigger
		if(location && location.length > 0)
		{
			this.handleSearch(location);

			// reset url query string
			window.location.hash = '#/';
		}

	},
	componentWillReceiveProps: function(newProps) {
		var location = newProps.location.query.location;

		// search trigger
		if(location && location.length > 0)
		{
			this.handleSearch(location);

			// reset url query string
			window.location.hash = '#/';
		}
	},
	render: function() {

		// pull variables off the state
		var {isLoading, temp, location, errorMessage} = this.state;

		// conditional function 
		function renderMessage() {

			if (isLoading) {

				return <h3 className="text-center">Fetching weather...</h3>;

			} else if (temp && location) {

				return <WeatherMessage temp={temp} location={location}/>;

			}
		}

		function renderError() {

			if (typeof errorMessage === 'string') {
				return (
					<ErrorModal message={errorMessage}/>
				);
			}

		}

		return (
			<div>
				<h1 className="text-center">Weather</h1>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
				{renderError()}
			</div>
		);
	}

});

module.exports = Weather;