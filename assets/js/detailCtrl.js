myApp.controller('DetailController', ['$http', '$scope', '$routeParams', function($http, $scope, $routeParams){

  $http.get('assets/json/store.json').success(function(data){
    // console.log(typeof($routeParams.id))


    //if the item in cart matches item in inventory, add it to $scope.product

    for (var i = 0; i < data.items.length; i++){
      if (data.items[i].id == $routeParams.id){
          $scope.product = data.items[i]
      }
    };

    $("#add-to-cart").click(function(){

      var myCart;//declare a cart

      //if there is nothing in localStorage by the key of 'cart', make something that is
      if (localStorage.getItem('cart') === null){
        localStorage.setItem('cart', '')
        myCart = [];
      } else {
        var cartString = localStorage.getItem('cart')
        var cartObj = JSON.parse(cartString)
        myCart = (cartObj)
        console.log(myCart)
      }

      //adding to quantity of product if product already purchased
      //making a new entry if that product has not been purchased already

      //identify id of product I'm trying to buy
      var productID = $scope.product.id

      //find an item in the cart
      var specificCartEntry;

      for (var i = 0; i < myCart.length; i++){
        var cartEntry = myCart[i]
        if (cartEntry.id == productID){ //cheating a little here as id is same as index
          specificCartEntry = cartEntry
        }
      }

      //if the item is not already in the cart
      if (specificCartEntry == null){
        specificCartEntry = {id: productID, quantity: parseInt($("#quantity").val())}
        myCart.push(specificCartEntry);
      } else {
        specificCartEntry.quantity += parseInt($("#quantity").val())
      }

      var toStorage = JSON.stringify(myCart);
      localStorage.setItem('cart', toStorage);


    console.log($scope.product.id);//correctly identifies the product


    });

  });
}]);
