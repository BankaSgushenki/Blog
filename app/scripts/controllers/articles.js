'use strict';

angular.module('myBlog')
.controller('ArticlesCtrl', function($scope, $routeParams, ArticlesService, Post) {
  	$scope.division = $routeParams.division;
    if ($scope.division === "latest") $scope.division = '';

	$scope.articles = Post.query();
	ArticlesService.setArticles($scope.articles);

	 $scope.deleteArticle = function (article) {
  		Post.delete({id: article._id});
  		$scope.articles = Post.query();
  	}

    $scope.predicate = 'date';
});