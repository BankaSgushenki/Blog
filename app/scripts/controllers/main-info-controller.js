'use strict';

/**
 * @ngdoc function
 * @name myBlog.controller:MainInformationCtrl
 * @description
 * # MainInformationCtrl
 * Controller of the myBlog
 */
angular.module('myBlog')
  .controller('MainInformationCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
