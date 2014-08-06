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
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainInformationCtrl'
      })
      .when('/articles/:division', {
        templateUrl: 'views/articles.html',
        controller: 'ArticlesCtrl'
      })
      .when('/article/:id', {
        templateUrl: 'views/single-article.html',
        controller: 'SingleArticleCtrl'
      }) 
      .when('/new-article', {
        templateUrl: 'views/new-article.html',
        controller: 'newArticleCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });