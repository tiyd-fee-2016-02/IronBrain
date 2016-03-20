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

    .when('/Cart', {
      templateUrl: 'shoppingCart.html',
      controller: 'CartController'
    })

    .when('/details/:id', {
      templateUrl: 'productDetail.html',
      controller: 'DetailController'
    })

    .when('/hero', {
      templateUrl: 'hero.html',
      controller: 'HeroController'
    })

    .when('/Receipt', {
      templateUrl: 'receipt.html',
      controller: 'CartController'
    })

    .otherwise({
      redirectTo: '/home'
    });
});
