'use strict';

/**
 * @ngdoc function
 * @name myBlog.controller:ArticlesCtrl
 * @description
 * # ArticlesCtrl
 * Controller of the myBlog
 */

angular.module('myBlog').
    directive("articlesList", function () {
        return {
            restrict: "E",
            templateUrl: "./views/articles.html"
        }
    }).
    directive("topNavigation", function () {
        return {
            restrict: "E",
            templateUrl: "./views/top-navigation.html"
        }
    }).
    directive("about", function () {
        return {
            restrict: "E",
            templateUrl: "./views/about.html"
        }
    });