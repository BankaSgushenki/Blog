'use strict';

angular.module('myBlog')
  .controller('SingleArticleCtrl', function($scope, $routeParams, ArticlesService) {
  	$scope.article = ArticlesService.getByArticleId($routeParams.id);
  });
