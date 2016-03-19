myApp.controller('DetailController', ['$http', '$scope', '$routeParams', function($http, $scope, $routeParams){

  $scope.detailedproduct = "Here's the details for product number " + $routeParams.id

  $http.get('assets/json/store.json').success(function(data){


    // console.log(typeof($routeParams.id))


    for (var i = 0; i < data.items.length; i++){
      if (data.items[i].id == $routeParams.id){
          $scope.product = data.items[i]
      }
    }

  });
}]);
