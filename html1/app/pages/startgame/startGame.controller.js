// test.controller.js
// purpose: model handling

(function () {
	'use strict';

	angular
		.module('app.startGame')
		.controller('StartGameController', StartGameController);

	StartGameController.$inject = ['dataservice'];

	function StartGameController(dataservice) {
		var vm = this;

		activate();

		function activate() {
			// no-op
		}

	};
})();