'use strict';

/**
 * @ngdoc function
 * @name myBlogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myBlogApp
 */
angular.module('myBlogApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
