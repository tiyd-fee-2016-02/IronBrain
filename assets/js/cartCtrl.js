
myApp.controller('CartController', ['$scope', '$http', function($scope, $http){

  $scope.cartMessage = "You're in the cart. Yes you are."
  $scope.contents = JSON.parse(localStorage.getItem('cart'))


  $scope.cartTotal = function(){
      var total = 0;
      for (var i = 0; i < $scope.contents.length; i++){
        total += $scope.products[$scope.contents[i].id].price//price of each thing on store page
      }
      return total;
  };

  $scope.totalItems = function(){
    var itemTotal = 0;
    for (var i = 0; i < $scope.contents.length; i++){
      itemTotal += $scope.contents[i].quantity;
    }

    return itemTotal;
  };


  $http.get('assets/json/store.json').success(function(data){
    $scope.products = data.items
  });


}]);
