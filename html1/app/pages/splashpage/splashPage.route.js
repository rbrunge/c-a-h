// test.route.js
// purpose: handling controller for test

(function() {
    'use strict';
    angular
        .module('app.splashPage')
        .run(appRun);

    /* ngInject */
    function appRun(routerHelper) {
         routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'splashPage',
                config: {
                    url: '/',
                    templateUrl: 'app/pages/splashPage/splashPage.html',
                    controller: 'SplashPageController',
                    controllerAs: 'vm',
                    title: 'Cards Againt Humanity'
                }
            }
        ];
    }
})();
