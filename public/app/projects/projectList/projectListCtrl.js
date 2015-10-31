'use strict';

angular.module('projectModule')
.controller('ProjectListCtrl', ['$scope', 'projectService', function($scope, projectService) {
  $scope.template = '/app/projects/projectList/projectListView.html';

  $scope.projectList = projectService.projectList();
  $scope.setProjectList = function(projectList) {
    $scope.projectList = projectList;
  };
}]);