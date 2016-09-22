"use strict";

(function() {
  this.app.controller("SplashController", ["$scope", "$state",
  function($scope, $state) {

    $scope.user = {};

  $scope.registerUser = function(user) {

    $scope.user = user;
    debugger;

    // $state.go('quotation');

  }

  }]);
}).call(this);
