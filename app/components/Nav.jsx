var React = require('react');
var {Link, IndexLink} = require('react-router');

// var Nav = React.createClass({
// 	render: function(){
// 		return (
// 			<div>
// 				<h2>Nav component</h2>
// 				<IndexLink to="/">Get Weather</IndexLink>
// 				<Link to="/about">About</Link>
// 				<Link to="/examples">Examples</Link>

// 			</div>
// 		);
// 	}
// });

var Nav = React.createClass({

	onSearch: function(e) {
		// prevents browser from refreshing page
		e.preventDefault();
		// this.refs.<ref name>.value
		var location = this.refs.searchLocation.value;
		var encodedLocation = encodeURIComponent(location);

		if (location.length > 0)
		{
			this.refs.searchLocation.value = '';
			window.location.hash = `#/?location=${encodedLocation}`;
		}


	},
	render: function() {
		return (
		
			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="menu">
						<li className="menu-text">React Weather App</li>
						<li>
							<IndexLink to="/" activeClassName="active">Get Weather</IndexLink>
						</li>
						<li>
							<Link to="/about" activeClassName="active">About</Link>
						</li>
						<li>
							<Link to="/examples" activeClassName="active">Examples</Link>
						</li>
					</ul>
				</div>
				<div className="top-bar-right">
					<form onSubmit={this.onSearch}>
						<ul className="menu">
							<li>
								<input type="search" ref="searchLocation" placeholder="Search Weather"/>
							</li>
							<li>
								<input type="submit" className="button" value="Get Weather"/>
							</li>
						</ul>
					</form>
				</div>
			</div>

		);
	}
})

module.exports = Nav;

