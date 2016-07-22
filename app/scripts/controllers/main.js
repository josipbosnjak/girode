'use strict';

/**
 * @ngdoc function
 * @name degirotestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the degirotestApp
 */
angular.module('degirotestApp')
    .controller('MainCtrl', function($http, $scope, $routeParams, $location, $rootScope) {
        $scope.resultsPerPage = 50;
        if (!$routeParams.firstResult) {
            $routeParams.firstResult = 0;
        }
        $scope.routeParams = $routeParams;

        $rootScope.loading = $http.get('http://api.github.com/repositories?since=' + $routeParams.firstResult).success(function(response) {
            $scope.repos = response;
        });

        //next page
        $scope.nextPage = function() {
            $location.path('repositories/' + (parseInt($routeParams.firstResult) + $scope.resultsPerPage));
        };

        //next page
        $scope.lastPage = function() {
            $location.path('repositories/' + (parseInt($routeParams.firstResult) - $scope.resultsPerPage));
        };

        /**
         * more info about repo
         * @param  {[type]} repo [description]
         * @return {[type]}      [description]
         */
        $scope.getMoreInfoAboutRepo = function(repo) {
            $rootScope.loading = $http.get('https://api.github.com/repos/' + repo.owner.login + '/'  + repo.name).success(function(response) {
              if(response.parent){
                repo.parentRepository = response.parent;
              } else {
                repo.notAFork = true;
              }
            });
        };
    });