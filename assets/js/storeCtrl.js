
myApp.controller('StoreController', [ '$http', '$scope', function($http, $scope){

  $http.get('assets/json/store.json').success(function(data){
    $scope.message = "get was got"
    $scope.products = data.items

    $scope.reviews = products.reviews

  });

  var newProduct;

  $(".submit-product").click(function(){
    newProduct = {"name": $(".new-name").val(), "description": $(".new-desc").val(), "price": $(".new-price").val(), "id": $(".new-ID").val() , "image": $(".new-img").val()}
    console.log(newProduct);


  //unsure of what the correct address to post to is
    $.post('http://localhost:3000/1', newProduct).success(function(){
      console.log("YEP");
    })
    .error(function(){
      console.log("NOPE");
    })

  });

}]);
