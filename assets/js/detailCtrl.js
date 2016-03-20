myApp.controller('DetailController', ['$http', '$scope', '$routeParams', function($http, $scope, $routeParams){

  $http.get('assets/json/store.json').success(function(data){
    // console.log(typeof($routeParams.id))

    for (var i = 0; i < data.items.length; i++){
      if (data.items[i].id == $routeParams.id){
          $scope.product = data.items[i]
      }
    };

    $("#add-to-cart").click(function(){

      var myCart;

      if (localStorage.getItem('cart') === null){
        localStorage.setItem('cart', '')
        myCart = [];
      } else {
        var cartString = localStorage.getItem('cart')
        var cartObj = JSON.parse(cartString)
        myCart = (cartObj)
        console.log(myCart)
      }

      //identify id of product I'm trying to buy
      var productID = $scope.product.id
      //find the item in the cart
      for (var i = 0; i < myCart.length; i++){
        var cartEntry = myCart[i]
        if (cartEntry.id == productID){ //cheating a little here as id is same as index
          cartEntry.quantity += 1
        } else {
          //add new object to cart
        }
      }


      var cartEntry = {id: productID, quantity: parseInt($("#quantity").val())}
      myCart.push(cartEntry);

      var toStorage = JSON.stringify(myCart);
      localStorage.setItem('cart', toStorage);

    });
  });
}]);
