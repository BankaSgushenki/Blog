'use strict';

angular.module('myBlog').service('ArticlesService', function () {
	var articles;

	this.getArticles = function () {
		return articles;
	};
	this.setArticles = function (items) {
		articles = items;
	};
	this.addToArticles = function(item) {
		articles.push(item);
	};
	this.getByArticleId = function(id) {
		return articles.filter(function (x) { if (x.id == id) return x})[0];
	};
});
