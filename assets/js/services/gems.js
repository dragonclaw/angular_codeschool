app.factory('gemJson', ['$http', function ($http) {
	return $http.get('assets/js/gems.json').success(function(data){
		return data;
	});
}]);