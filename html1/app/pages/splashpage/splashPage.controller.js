// test.controller.js
// purpose: model handling

(function () {
	'use strict';

	angular
		.module('app.splashPage')
		.controller('SplashPageController', SplashPageController);

	SplashPageController.$inject = ['dataservice'];

	function SplashPageController(dataservice) {
		var vm = this;
		vm.players = [];
		// vm.title = 'This is a test';

		activate();

		function activate() {
			return loadTestData().then(function() {
				// no-ops 
				// could log
			});
		}

		function loadTestData() {
			return dataservice.getTestData()
				.then(function(data) {
					vm.players = data;
					return vm.players;
			});
		}
	};
})();