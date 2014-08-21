'use strict';

angular.module('myBlog')
.service('ArticlesService', function ($http, $rootScope) {
	var articles;

	this.setArticles = function (items) {
		articles = items;
	};

	this.getByArticleId = function(id) {
		return articles.filter(function (x) { if (x._id == id) return x})[0];
	};
}).

factory('Post', function($resource) {
		var Posts = $resource('http://54.72.3.96:3000/posts/:id', {}, {
			update: {method: 'PUT'}
	  	})
	  	return Posts;
	})
