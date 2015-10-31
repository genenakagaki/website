'use strict';

angular.module('mainApp', [
  'ngRoute', 
  'headerModule',
  'footerModule',
  'projectModule',
  'skillService',
  'contactModule'
])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/app/home/homeView.html',
      controller : 'HomeCtrl'
    })
    .when('/projects/:projectName', {
      templateUrl: '/app/projects/projectDetail/projectDetailView.html',
      controller : 'ProjectDetailCtrl'
    })
    // .when('/projects', {
    //   templateUrl: '/app/views/projects/projectsView.html',
    //   controller : 'ProjectsCtrl'
    // })
    // .when('/about', {
    //   templateUrl: '/app/views/about/aboutView.html',
    //   controller : 'AboutCtrl'
    // })
    // .when('/contact', {
    //   templateUrl: '/app/views/contact/contactView.html',
    //   controller : 'ContactCtrl'
    // })
    .otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);
}]);