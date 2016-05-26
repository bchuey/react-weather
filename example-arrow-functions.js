var names = ['Andrew', 'Julie', 'Jen'];

// names.forEach(function(name){
// 	console.log('forEach', name);
// });

// // arrow functions es6
// // can be used in place of anonymous functions

// // w/ statement bodies
// names.forEach((name) => {
// 	// statements you want to run
// 	console.log('arrowFunc', name);
// 	console.log('something else');

// });


// // can do one thing without {}
// names.forEach((name) => console.log(name));


// var returnMe = (name) => name + '!';
// console.log(returnMe('Chris'));

var person = {
	name: 'Chris',
	greet: function() {
		names.forEach((name) => {
			console.log(this.name + ' says hi to ' + name);
		});
	}
};

person.greet();