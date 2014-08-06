'use strict';

/**
 * @ngdoc function
 * @name myBlog.controller:navigationCtrl
 * @description
 * # navigationCtrl
 * Controller of the myBlog
 */

angular.module('myBlog')
  .controller('navigationCtrl', function ($scope, $routeParams, ArticlesService) {

   $scope.isActive = function (division) {
        if (division === $routeParams.division) return true;
    }
  });
