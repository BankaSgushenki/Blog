'use strict';

/**
 * @ngdoc function
 * @name myBlog.controller:SingleArticleCtrl
 * @description
 * # SingleArticleCtrl
 * Controller of the myBlog
 */

angular.module('myBlog')
  .controller('SingleArticleCtrl', function ($scope, $routeParams, ArticlesService) {
  	$scope.article = ArticlesService.getByArticleId($routeParams.id);
  });
