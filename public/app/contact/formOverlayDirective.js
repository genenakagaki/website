'use strict';

angular.module('contactModule')
.directive('formOverlay', ['$scope', function($scope) {
  return {
    restrict: 'E',
    scope: {
      controller: '=';
    },
    link: function(scope, element, attr) {
      scope.setOverlay = function() {
        var form   = element.parent().children()[0];
        var width  = form.offsetWidth;
        var height = form.offsetHeight;
        
        element.css('width', width);
        element.css('height', height);
        element.css('top', height);
        console.log('hi')
      }
    }
  }
}]);