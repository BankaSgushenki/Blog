'use strict';

angular.module('myBlog').service('ArticlesService', function ($http, $rootScope, $resource) {
	var articles;

	if (typeof articles == 'undefined') {
    	$http({method: 'GET', url: 'http://54.72.3.96:3000/posts'}).
        	success(function(data, status) {
        		articles = data;
        		$rootScope.$broadcast('loading-finished');
        	}).
         	error(function(data, status) {
         		console.log(status);
        	});
    }

	this.getArticles = function () {
		return articles;
	};
	this.setArticles = function (items) {
		articles = items;
	};
	this.addToArticles = function(data) {
		articles.push(data);
		console.log(data);
	};
	this.getByArticleId = function(id) {
		return articles.filter(function (x) { if (x._id == id) return x})[0];
	};
});
