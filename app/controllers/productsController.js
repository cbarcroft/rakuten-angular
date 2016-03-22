app.controller('ProductsController', function($scope, ProductService) {
    $scope.products;
    $scope.dataLoading = true;
    $scope.error = false;

    // Retrieve product data.  HTTP call is contained in ProductService, with the cache option enabled to ensure we don't hit the API on every route change.
    ProductService.getProducts().then(function(data) {
    	$scope.dataLoading = false;
        $scope.products = data;

    }, function(data){
    	$scope.dataLoading = false;
    	$scope.error = data;
    });
    
});