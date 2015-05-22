// core.module.js
// purpose: module for core funtionality

(function() {
	'use strict';

    var app = angular.module('app.core', [
        /*
         * Angular modules
         */
        'ngAnimate', 'ngSanitize','ngLocale',
        /*
         * Our reusable cross app code modules
         */
        'blocks.exception', 
        'blocks.logger', 
        'blocks.router',
        /*
         * 3rd Party modules
        'ngplus'
         */
         'ui.router'
    ]);

    app.run(function($rootScope, $location) {
        $rootScope.go = function(link) {
            $location.path(link);
        };
    });


})();