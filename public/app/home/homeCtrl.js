'use strict';

angular.module('mainApp')
.controller('HomeCtrl', [
 '$scope', 'projectService', 'skillService', 
  function($scope, projectService, skillService) 
{
  $scope.projectList = projectService;

  $scope.skillList = [
    skillService.findSkillByName('java'),
    skillService.findSkillByName('javascript'),
    skillService.findSkillByName('objectiveC'),
    skillService.findSkillByName('python')
  ];
}]);