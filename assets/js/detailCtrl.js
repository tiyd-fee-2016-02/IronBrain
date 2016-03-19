myApp.controller('DetailController', ['$http', '$scope', '$routeParams', function($http, $scope, $routeParams){

  $scope.detailedproduct = "Here's the details for product number " + $routeParams.id

  $http.get('assets/json/store.json').success(function(data){


    for (var i = 0; i < data.items.length; i++){
      if (data.items[i].id == $routeParams.id){
          $scope.product = data.items[i]
      }
    }

    console.log($scope.product.id);//correctly identifies the product

  });
}]);
