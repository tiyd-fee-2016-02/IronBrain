
myApp.controller('CartController', ['$scope', '$http', function($scope, $http){

  $scope.contents = JSON.parse(localStorage.getItem('cart'));

  //calc how much cost is, by product
  // $scope.productTotal = function(){
  //   var prodTotal = 0;
  //   for (var i = 0; i < $scope.contents.length; i++){
  //     prodTotal += ($scope.products[$scope.contents[i].id].price)*($scope.contents[i].quantity)
  //
  //   return prodTotal;
  //   }
  // };

  //calc how much all your purchases cost
  $scope.cartTotal = function(){
      var total = 0;
      for (var i = 0; i < $scope.contents.length; i++){
        total += ($scope.products[$scope.contents[i].id].price)*($scope.contents[i].quantity)//price of each thing in cart, times quantity
      }
      return total;
  };

  //calc how many items in total have been bought
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
  //need this so the purchased items can have access to the inventory (store.json)

}]);
