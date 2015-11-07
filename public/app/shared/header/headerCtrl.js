'use strict';

angular.module('headerModule')
.controller('HeaderCtrl', ['$scope', function($scope) {
  $scope.template = '/app/shared/header/headerView.html';

  // Navigation Link
  function NavLink(name, url) {
    this.name = name;
    this.url  = url;
  }

  var homeLink      = new NavLink('Home',     '/');
  var projectsLink  = new NavLink('Projects', '/projects');
  var aboutLink     = new NavLink('About',    '/about');
  var contactLink   = new NavLink('Contact',  '#main-footer');

  $scope.navLinkList = [
    homeLink,
    projectsLink,
    aboutLink,
    contactLink
  ];

  // External Link
  function ExtLink(name, url, img) {
    this.name = name;
    this.url  = url;
    this.img  = img;
  }

  var githubLink   = new ExtLink('GitHub',   'https://github.com/kagen47', '');
  var linkedinLink = new ExtLink('Linkedin', '#', '');

  $scope.extLinkList = [
    githubLink,
    linkedinLink
  ];
}]);