angular.module('UserModule', ['ngResource'])
	.factory('User', ['$resource', function($resource) {
		var User = $resource(REST_BASE_URL + '/users/:id',
			{id: '@id'},
			{
				authenticate: {method: 'POST', url: REST_BASE_URL+'/token'}
			}
		);
		console.log(User);
		return User;
	}]);