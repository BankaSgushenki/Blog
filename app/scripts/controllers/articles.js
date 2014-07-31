'use strict';

/**
 * @ngdoc function
 * @name myBlog.controller:ArticlesCtrl
 * @description
 * # ArticlesCtrl
 * Controller of the myBlog
 */

angular.module('myBlog').controller('ArticlesCtrl', function ($scope, $http, ArticlesService) {
  	$scope.division;
    $scope.articles = ArticlesService.getArticles();

    if (typeof $scope.articles == 'undefined') {
    	$http({method: 'GET', url: 'articles.json'}).
        	success(function(data, status) {
        		$scope.articles = ArticlesService.setArticles(data.articles);
        	}).
         	error(function(data, status) {
         		console.log(status);
        	});
    }
    $scope.predicate = 'date';

    $scope.isActive = function (division) {
     		if (division === $scope.division) return true;
    }

     $scope.setCurrentDivision = function (division) {
    	 $scope.division = division;
    }
  });
