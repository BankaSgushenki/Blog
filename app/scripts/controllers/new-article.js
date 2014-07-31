'use strict';

/**
 * @ngdoc function
 * @name myBlog.controller:newArticleCtrl
 * @description
 * # newArticleCtrl
 * Controller of the myBlog
 */

var Article = function (form) {
  	this.division = "js";
  	this.title = form.title.$modelValue;
  	this.imageSrc = form.img.$modelValue;
  	this.text = form.text.$modelValue;
  	this.author = form.author.$modelValue;
  	this.date = new Date();
}

angular.module('myBlog')
  .controller('newArticleCtrl', function ($scope, ArticlesService) {
  $scope.submit = function() {
  	console.log($scope.newArticle);
  	ArticlesService.addToArticles(new Article($scope.additionForm));
  	}
  });
