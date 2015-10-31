'use strict';

angular.module('headerModule')
.controller('HeaderCtrl', ['$scope', function($scope) {
  $scope.template = '/app/shared/header/headerView.html';

  function Link(name, url) {
    this.name = name;
    this.url  = url;
  }

  var homeLink      = new Link("Home",     "/");
  var portfolioLink = new Link("Projects", "/projects");
  var aboutLink     = new Link("About",    "/about");

  $scope.linkList = [
    homeLink,
    portfolioLink,
    aboutLink
  ];
}]);