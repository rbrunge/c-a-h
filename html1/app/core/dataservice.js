// dataservice.js
// purpose: single point to access data

(function() {
	'use strict';

	angular
		.module('app.core')
		.factory('dataservice', dataservice);

	dataservice.$inject = ['$http', '$location', '$q'];

	function dataservice($http, $location, $q) {

		var service = {
			getTestData: getTestData
		};

		return service;

		function getTestData() {
			var data = [
			    {name: 'Robert Downey Jr.', character: 'Tony Stark / Iron Man'},
			    {name: 'Chris Hemsworth', character: 'Thor'},
			    {name: 'Chris Evans', character: 'Steve Rogers / Captain America'},
			    {name: 'Mark Ruffalo', character: 'Bruce Banner / The Hulk'},
			    {name: 'Scarlett Johansson', character: 'Natasha Romanoff / Black Widow'},
			    {name: 'Jeremy Renner', character: 'Clint Barton / Hawkeye'},
			    {name: 'Gwyneth Paltrow', character: 'Pepper Potts'},
			    {name: 'Samuel L. Jackson', character: 'Nick Fury'},
			    {name: 'Paul Bettany', character: 'Jarvis'},
			    {name: 'Tom Hiddleston', character: 'Loki'},
			    {name: 'Clark Gregg', character: 'Agent Phil Coulson'}
			];
			return $q.when(data);
	    }
	}

})(); 