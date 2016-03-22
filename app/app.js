var app = angular.module('rakutenApp', ['ngRoute']);

// Configure routes (although there is only one.)
app.config(function($routeProvider) {
  $routeProvider
 
  .when('/', {
    templateUrl : 'views/products.html',
    controller  : 'ProductsController'
  })
 
  .otherwise({redirectTo: '/'});
});