"use strict";

(function() {
  this.app.controller("QuotationController", ["$scope", "$state", "$ionicModal",
  function($scope, $state , $ionicModal) {

    $scope.init = function() {



    }

    $scope.addMotor = function() {

      $scope.openModal();

    }

    $ionicModal.fromTemplateUrl('my-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {

    $scope.modal = modal;
  });
  $scope.openModal = function() {
    
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  // Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });






  }]);
}).call(this);
