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
  var contactLink   = new NavLink('Contact',  '#footer');

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

  var githubLink   = new ExtLink(
    'GitHub',   
    'https://github.com/kagen47', 
    '/assets/img/extLink/github-icon.svg'
  );
  var linkedinLink = new ExtLink(
    'LinkedIn', 
    'https://www.linkedin.com/in/gene-nakagaki-b1569388', 
    '/assets/img/extLink/linkedin-icon.png'
  );

  $scope.extLinkList = [
    githubLink,
    linkedinLink
  ];
}]);