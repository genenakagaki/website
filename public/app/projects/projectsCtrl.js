'use strict';

angular.module('projectModule')
.controller('ProjectsCtrl', [
   '$scope', 'skillService', 'projectService', 
    function($scope, skillService, projectService) 
{
  $scope.categories = [
    'All', 'Language', 'Database', 'VCS', 'PaaS'
  ];

  $scope.currentCategory = 'All';
  $scope.setCategory = function(category) {
    $scope.currentCategory = category;
  };

  $scope.skills = skillService.findAll();

  // skills animation
  $scope.animateSkillHover = function(skill) {
    skill.animate = 'animate-skill-hover';
  };
  $scope.revertSkillHover = function(skill) {
    skill.animate = '';
  };

  $scope.projects = projectService.findAll();

  // project animate
  $scope.animateProjectClick = function(project) {
    // var animateClassName = 'animate-project-click';
    // if (project.animate === '') {
    //   project.animate = 'animate-project-click';
    // } 
    // else {
    //   project.animate = '';
    // }
    project.animate = 'animate-project-click';
  };

  $scope.revertProjectClick = function(project) {
    project.animate = '';
  };


}]);