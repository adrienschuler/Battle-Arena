module.exports = function(app) {
 
	var port = process.env.PORT || 3000;
 

	app.configure('local', function () {
		this
			.set('host', 'localhost')
			.set('port', port)
			.set('ENV','local');
	}); 

	
	app.configure('production', function () {
		this
			.set('host', 'esgi-battle-arena.herokuapp.com')
			.set('port', port)
			.set('ENV','production');
	});


	return app	
};