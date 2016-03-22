// Create directive to generate the product list table.  Restrict usage to attribute.
app.directive('ngProductList', function() {
  return {
    restrict: 'E',
    scope: {
    	products: '='
    },
    templateUrl: 'views/directives/ngProductList.html'
  }
});