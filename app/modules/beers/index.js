'use strict';

angular.module('myApp.Beers', ['ngRoute'])
.config(['$routeProvider', beersListConfig])
.controller('BeersListCtrl', BeersListCtrl)
.controller('BeersCreateCtrl', BeersCreateCtrl)
.controller('BeersGetCtrl', BeersGetCtrl)
.controller('BeerEditCtrl', BeerEditCtrl);

// Config
function beersListConfig ($routeProvider){
	$routeProvider.when('/beers', {
		templateUrl: 'modules/beers/list.html',
		controller: 'BeersListCtrl'
	})
	.when('/create', {
		templateUrl: 'modules/beers/create.html',
		controller: 'BeersCreateCtrl'
	})
	.when('/beers/:id', {
		templateUrl: 'modules/beers/get.html',
		controller: 'BeersGetCtrl'
	})
	.when('/beers/:id/edit', {
		templateUrl: 'modules/beers/edit.html',
		controller: 'BeerEditCtrl'
	});
};

// beersListConfig['$inject'] = ['$routeProvider'];

// Controllers
function BeersListCtrl($scope, $http){
	var httpRequest = {
		url: 'http://localhost:3000/api/beers/',
		method: 'GET'
	}

	$http(httpRequest)
	.success(function(data){
		$scope.list = data;
		$scope.message = 'Listagem feita com sucesso.';
	})
	.error(function(data){
		$scope.message = 'Listagem não pode ser feita.';
	});
	$scope.remove = function( beer ){
		var httpRequest = {
			url: 'http://localhost:3000/api/beers/' + beer._id,
			method: 'DELETE'
		}

		$http(httpRequest)
		.success(function(data){
			var index = $scope.list.indexOf(beer);
			$scope.list.splice(index, 1);

			$scope.message = 'Remoção feita com sucesso.';
		})
		.error(function(data){
			$scope.message = 'Remoção não pode ser feita.';
		});
	}
};

function BeersCreateCtrl($scope, $http){

	$scope.create = function ( beer ){
		var httpRequest = {
			url: 'http://localhost:3000/api/beers/',
			method: 'POST',
			data: beer
		};

		$http(httpRequest)
		.success(function(data){
			$scope.list = data;
			$scope.message = 'Cadastro feita com sucesso.';
		})
		.error(function(data){
			$scope.message = 'Cadastro não pode ser feita.';
		});
	};

};
function BeersGetCtrl($scope, $http, $routeParams){

	var httpRequest = {
		url: 'http://localhost:3000/api/beers/' + $routeParams.id,
		method: 'GET'
	}

	$http(httpRequest)
	.success(function(data){
		$scope.beer = data;
		$scope.message = 'Listagem feita com sucesso.';
	})
	.error(function(data){
		$scope.message = 'Listagem não pode ser feita.';
	});

};
function BeerEditCtrl($scope, $http, $routeParams){

	var httpRequest = {
		url: 'http://localhost:3000/api/beers/' + $routeParams.id,
		method: 'GET'
	}

	$http(httpRequest)
	.success(function(data){
		$scope.beer = data;
		$scope.message = 'Listagem feita com sucesso.';
	})
	.error(function(data){
		$scope.message = 'Listagem não pode ser feita.';
	});

	$scope.save = function ( beer ){
		var httpRequest = {
			url: 'http://localhost:3000/api/beers/' + $routeParams.id,
			method: 'PUT',
			data: beer
		};

		$http(httpRequest)
		.success(function(data){
			$scope.list = data;
			$scope.message = 'Cadastro feita com sucesso.';
		})
		.error(function(data){
			$scope.message = 'Cadastro não pode ser feita.';
		});
	};

};
// BeersListCtrl.$inject = ['$scope', 'BeerService'];
// BeersCreateCtrl.$inject = ['$scope', 'BeerService'];