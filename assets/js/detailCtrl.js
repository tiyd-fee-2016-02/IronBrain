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

        //identify id of everything in my cart
        //compare my new purchase's id to ids of all things already in the cart
      //if i find it, add my quantity to existing quantity
      //if I haven't bought it yet, add it to my cart
      var cartEntry = {id: productID, quantity: 1}
      myCart.push(cartEntry);

      var toStorage = JSON.stringify(myCart);
      localStorage.setItem('cart', toStorage);

    });
  });
}]);
