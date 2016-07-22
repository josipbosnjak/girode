'use strict';

/**
 * @ngdoc overview
 * @name degirotestApp
 * @description
 * # degirotestApp
 *
 * Main module of the application.
 */
angular
  .module('degirotestApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'cgBusy'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/repositories/:firstResult?', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/repositories'
      });
  });
