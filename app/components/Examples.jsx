var React = require('react');
var {Link} = require('react-router');


var Examples = (props) => {

	return (
		<div>
			<h1 className="text-center">Examples</h1>
			<p>Here are a few examples to try out: </p>
			<ol>
				<li>
					<Link to='/?location=San%20Francisco%20CA'>San Francisco, CA</Link>
				</li>
				<li>
					<Link to='/?location=Rio'>Rio, Brazil</Link>
				</li>
			</ol>
		</div>
	);
};

// var Examples = React.createClass({

// 	render: function() {
// 		return (
// 			<h3>Examples Component</h3>
// 		);
// 	}

// });

module.exports = Examples;