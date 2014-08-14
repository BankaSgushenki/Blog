'use strict';

/**
 * @ngdoc function
 * @name myBlog.controller:ArticlesCtrl
 * @description
 * # ArticlesCtrl
 * Controller of the myBlog
 */

angular.module('myBlog').controller('ArticlesCtrl', function ($scope, $http, $routeParams, ArticlesService) {
  	$scope.division = $routeParams.division;
    if ($scope.division === "latest") $scope.division = '';

    $scope.$on('loading-finished', function(event, args) {
      $scope.articles = ArticlesService.getArticles();
    });
    
    $scope.predicate = 'date';
});