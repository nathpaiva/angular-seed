'use strict';

angular.module('myApp.Beers.Service', [])
.service('BeersService', BeersService);


// Controllers
function BeersService($http){
	var httpRequest = {
			url: 'http://localhost:3000/api/beers/',
			method: 'GET'
		};

	this.list = function (){
		return $http(httpRequest);
	};

	this.remove = function (beer){
		var httpRequest = {
			url: 'http://localhost:3000/api/beers/' + beer._id,
			method: 'DELETE'
		}
		return $http(httpRequest);
	};

	this.create = function (beer){
		var httpRequest = {
			url: 'http://localhost:3000/api/beers/',
			method: 'POST',
			data: beer
		};
		return $http(httpRequest);
	};

	this.get = function (id){
		var httpRequest = {
			url: 'http://localhost:3000/api/beers/' + id,
			method: 'GET'
		};
		return $http(httpRequest);
	};

	this.edit = function (id){
		var httpRequest = {
			url: 'http://localhost:3000/api/beers/' + id,
			method: 'GET'
		};
		return $http(httpRequest);
	};

	this.update = function (id, beer){
		var httpRequest = {
			url: 'http://localhost:3000/api/beers/' + id,
			method: 'PUT',
			data: beer
		};

		return $http(httpRequest);
	};

};

BeersService.$inject = ['$http'];