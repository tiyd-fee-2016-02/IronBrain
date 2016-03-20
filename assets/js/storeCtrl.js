
myApp.controller('StoreController', [ '$http', '$scope', function($http, $scope){

  $http.get('assets/json/store.json').success(function(data){
    $scope.message = "get was got"
    $scope.products = data.items

    $scope.reviews = products.reviews

  });
}]);
