
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


    // .when('/EditProfile', {
    //   templateUrl: 'EditProfile.html',
    //   controller: 'StoreController'
    // })

    .when('/Cart', {
      templateUrl: 'shoppingCart.html',
      controller: 'StoreController'
    })

    // .when('/productdetail', {
    //   templateUrl: 'details.html',
    //   controller: 'DetailController'
    // })

    .when('/details/:id', {
      controller: 'DetailController'
    })
    .otherwise({
      redirectTo: '/home'
    });
});
