// test.route.js
// purpose: handling controller for test

(function() {
    'use strict';
    angular
        .module('app.startGame')
        .run(appRun);

    appRun.$inject = ['routerHelper'];

    // function appRun(routerHelper) {
    function appRun(routerHelper) {
         routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'startGame',
                config: {
                    url: '/startgame',
                    templateUrl: 'app/pages/startgame/startgame.html',
                    controller: 'StartGameController',
                    controllerAs: 'vm',
                    title: 'Start Game'
                }
            }
        ];
    }
})();
