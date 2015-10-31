'use strict';

angular.module('contactModule')
.controller('ContactCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.template = '/app/contact/contactView.html';

  $scope.directive = {
  };

  $scope.mail = {};

  $scope.sendMail = function() {
    // $scope.directive.setOverlay();
    
    $scope.sendResult = "sending message";
    alert($scope.sendResult)
    $http.post('/api/mail/sendMail', $scope.mail).success(function(response) {
    }).error(function(response) { 
      alert(response.messsage);
    });
  };
}]);