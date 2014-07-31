'use strict';

/**
 * @ngdoc overview
 * @name myBlog
 * @description
 * # myBlog
 *
 * Main module of the application.
 */

angular
  .module('myBlog', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/articles.html',
        controller: 'ArticlesCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/articles', {
        templateUrl: 'views/articles.html',
        controller: 'ArticlesCtrl'
      }) 
      .when('/new-article', {
        templateUrl: 'views/new-article.html',
        controller: 'newArticleCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });