'use strict';

angular.module('headerModule')
.controller('HeaderCtrl', ['$scope', function($scope) {
  $scope.template = '/app/shared/header/headerView.html';

  function Link(name, url) {
    this.name = name;
    this.url  = url;
  }

  var homeLink      = new Link("Home",     "/");
  var projectsLink  = new Link("Projects", "/projects");
  var aboutLink     = new Link("About",    "/about");
  var contactLink   = new Link("Contact",  "#main-footer")

  $scope.linkList = [
    homeLink,
    projectsLink,
    aboutLink,
    contactLink
  ];
}]);