
myApp.controller('CartController', ['$scope', '$http', function($scope, $http){

  $scope.contents = JSON.parse(localStorage.getItem('cart'));

  //calc how much all your purchases cost
  var cartTotal = function(){
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
      itemTotal += parseInt($scope.contents[i].quantity);
    }
    return itemTotal;
  };

  //need this so the purchased items can have access to the inventory (store.json)
  $http.get('assets/json/store.json').success(function(data){
    $scope.products = data.items
    $scope.cartCost = cartTotal()
  });

  //from the receipt page, if you click "Shop some more", remove all items from cart
  $(".cart-done").click(function(){
    localStorage.clear()
  });

  //to delete an item from the cart
  //this removes items from $scope.contents, but no change to the page
  $(".delete-item").click(function(){
    var clickIndex = $(".delete-item").index(this)
    $scope.contents.splice(clickIndex, 1)
  });

  $(".update-cart").click(function(){
    for (var i = 0; i < $scope.contents.length; i++){
      var newQuantity = parseInt($($(".quantity")[i]).val())
      if (newQuantity <= 0){
        //delete it
        $scope.contents.splice(i, 1)
      } else {
        $scope.contents[i].quantity = newQuantity
      }
    }

    var toStorage = JSON.stringify($scope.contents);
    localStorage.setItem('cart', toStorage);
    $scope.$apply(function(){
      $scope.cartCost = cartTotal();
    })

  });

}]);
