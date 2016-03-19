
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
    .when('/hero', {
      templateUrl: 'hero.html',
      controller: 'StoreController'
    })
    .when('/cart', {
      templateUrl: 'shoppingCart.html',
      controller: 'StoreController'
    })
    .when('/productdetail', {
      templateUrl: 'details.html',


    .when('/Cart', {
      templateUrl: 'shoppingCart.html',
      controller: 'StoreController'
    })

    .when('/details/:id', {
      controller: 'DetailController'
    })
    .otherwise({
      redirectTo: '/home'
    });
});
