// myApp.controller('StoreController', function($scope){
//   $scope.products = [
//     {name: 'PowerThirst', description: 'energy, so much energy', price: '$4.20'},
//     {name: 'Nootropics', description: 'delicioius nutrition', price: '$100'},
//     {name: 'BicepPlane', description: 'one strong plane', price: '$150'},
//     {name: 'IronBrain', description: 'your brain is metal now', price: '$12,000'}
//   ];
//
//   $scope.storeName = "Iron Brain"
//
// });


myApp.controller('StoreController', [ '$http', '$scope', function($http, $scope){

  $http.get('assets/json/store.json').success(function(data){
    $scope.message = "get was got"
    $scope.content = data

  });
}]);
