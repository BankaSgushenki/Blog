'use strict';

/**
 * @ngdoc function
 * @name myBlog.controller:newArticleCtrl
 * @description
 * # newArticleCtrl
 * Controller of the myBlog
 */

angular.module('myBlog')
  .controller('newArticleCtrl', function ($scope, ArticlesService) {
  $scope.article = {};
  $scope.submit = function() {
    //$scope.article.division = "js";
    $scope.article.date = new Date();
  	ArticlesService.addToArticles($scope.article);
  	}
  });
