// test.route.js
// purpose: handling controller for test

(function() {
    'use strict';
    angular
        .module('app.readyToStart')
        .run(appRun);

    appRun.$inject = ['routerHelper'];

    // function appRun(routerHelper) {
    function appRun(routerHelper) {
         routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'readyToStart',
                config: {
                    url: '/readytostart',
                    templateUrl: 'app/pages/readytostart/readytostart.html',
                    controller: 'ReadyToStartController',
                    controllerAs: 'vm',
                    title: 'Waiting for players - get ready'
                }
            }
        ];
    }
})();
