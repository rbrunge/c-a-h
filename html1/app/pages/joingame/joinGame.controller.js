// test.controller.js
// purpose: model handling

(function () {
	'use strict';

	angular
		.module('app.joinGame')
		.controller('JoinGameController', JoinGameController);

	JoinGameController.$inject = ['dataservice'];
	
	function JoinGameController(dataservice) {
		var vm = this;

		activate();

		function activate() {
			// no-op
		}

	};
})();