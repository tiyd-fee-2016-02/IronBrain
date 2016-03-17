
var myApp = angular.module("myApp", ['ngRoute']);

myApp.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'welcome.html',
      controller: 'StoreController'
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

  $scope.message = "Click on the hyper link to view the students list."

  $scope.username = "Daniel"

});
