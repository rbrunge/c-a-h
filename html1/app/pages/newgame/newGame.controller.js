// newGame.controller.js
// purpose: model handling

(function () {
	'use strict';

	angular
		.module('app.newGame')
		.controller('NewGameController', NewGameController);

	NewGameController.$inject = ['dataservice'];

	function NewGameController(dataservice) {
		var vm = this;

		activate();

		function activate() {
			// no-op
		}

	};
})();