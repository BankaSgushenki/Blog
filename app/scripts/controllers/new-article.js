'use strict';

angular.module('myBlog')
  .controller('newArticleCtrl', function($scope, ArticlesService, Post) {
  $scope.article = {};
  $scope.submit = function() {
    $scope.article.date = new Date();
  	var article = new Post($scope.article);
  	article.$save();
  	}
  });
