// test.route.js
// purpose: handling controller for test

(function() {
    'use strict';
    angular
        .module('app.newGame')
        .run(appRun);

    appRun.$inject = ['routerHelper'];

    // function appRun(routerHelper) {
    function appRun(routerHelper) {
         routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'newGame',
                config: {
                    url: '/newgame',
                    templateUrl: 'app/pages/newGame/newGame.html',
                    controller: 'NewGameController',
                    controllerAs: 'vm',
                    title: 'New Game'
                }
            }
        ];
    }
})();
