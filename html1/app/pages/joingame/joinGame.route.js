// test.route.js
// purpose: handling controller for test

(function() {
    'use strict';
    angular
        .module('app.joinGame')
        .run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
         routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'joinGame',
                config: {
                    url: '/joingame',
                    templateUrl: 'app/pages/joingame/joingame.html',
                    controller: 'JoinGameController',
                    controllerAs: 'vm',
                    title: 'Join a Game'
                }
            }
        ];
    }
})();
