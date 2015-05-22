// app.module.js
// purpose: start up file

(function() {
	'use strict';

	angular.module('app', [
		'app.core', 
		'app.layout',
		'app.splashPage',
		'app.startGame',
		'app.newGame',
		'app.joinGame'
	])
})();
