'use strict';

/**
 * @ngdoc function
 * @name myBlog.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myBlog
 */
angular.module('myBlog')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
