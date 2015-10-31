'use strict';

angular.module('headerModule')
.directive('topFixedScroll', ['$window', function($window) {
  return {
    restrict: 'A',
    link: function(scope, element, attr) {
      var title = element.parent().children()[0];
      var titleHeight = title.scrollHeight;
      $window.onscroll = function() {
        if ($window.scrollY < titleHeight) {
          element.css('top', titleHeight - $window.scrollY + 'px');
        }
        else {
          element.css('top', '0');
        }
      }
    }
  }
}]);