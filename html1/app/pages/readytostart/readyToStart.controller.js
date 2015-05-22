// newGame.controller.js
// purpose: model handling

(function () {
	'use strict';

	angular
		.module('app.readyToStart')
		.controller('ReadyToStartController', ReadyToStartController);

	ReadyToStartController.$inject = ['dataservice'];

	function ReadyToStartController(dataservice) {
		var vm = this;

		activate();

		function activate() {
			// no-op
		}

	};
})();