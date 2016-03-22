app.factory('ProductService', ['$http', '$q', function ($http, $q) {

    var url = 'http://cbarcroft-rakuten.herokuapp.com/products.json';
    var ProductService = {};

    // Generate promise to retrieve product data from the API.  Return data if successful, and error message if not.
    // $http.get() cache option used to prevent repeatedly accessing the API on route changes (even though there are none at the moment.)
    ProductService.getProducts = function() {
            var defer = $q.defer();
            $http.get(url, { cache: 'true'})
            .success(function(data) {
                defer.resolve(data);
            })
            .error(function(data){
            	defer.reject(
            		'Error retrieving products.  Please ensure ' + url + ' is online (Heroku takes ~15 seconds to start if it has not been accessed recently.)'
            	);
            });

            return defer.promise;
    };

    return ProductService;

}]);