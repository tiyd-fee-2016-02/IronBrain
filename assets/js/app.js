
var myApp = angular.module("myApp", ['ngRoute']);

myApp.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'welcome.html',
      controller: 'NameController'
    })
    .when('/ViewStore', {
      templateUrl: 'ViewStore.html',
      controller: 'StoreController'
    })

    .when('/EditProfile', {
      templateUrl: 'EditProfile.html',
      controller: 'StoreController'
    })
    .otherwise({
      redirectTo: '/home'
    });
});

myApp.controller('StoreController', function($scope){
  $scope.products = [
    {name: 'PowerThirst', description: 'energy, so much energy', price: '$4.20'},
    {name: 'Nootropics', description: 'delicioius nutrition', price: '$100'},
    {name: 'BicepPlane', description: 'one strong plane', price: '$150'}
  ];

  $scope.storeName = "Iron Brain"

});

myApp.controller('NameController', function($scope){
  $scope.username = "Daniel"

});
