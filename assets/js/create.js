myApp.controller('CreateController', [ '$scope', function($scope){

  $scope.master = {};

  $scope.update = function(user){
    $scope.master = angular.copy(user)
  };

}]);
