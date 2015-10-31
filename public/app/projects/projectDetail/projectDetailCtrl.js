'use strict';

angular.module('projectModule')
.controller('ProjectDetailCtrl', [
  '$scope', 
  '$routeParams', 
  'projectService', 
  function($scope, $routeParams, projectService) 
{
  $scope.routeParams = $routeParams.projectName;
  $scope.project = projectService.findProjectByName($routeParams.projectName);
}]);