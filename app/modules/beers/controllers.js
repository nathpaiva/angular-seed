'use strict';

angular.module('myApp.Beers.Controllers', [])
.controller('BeersListController', BeersListController)
.controller('BeersCreateController', BeersCreateController)
.controller('BeersGetController', BeersGetController)
.controller('BeerEditController', BeerEditController);

// Controllers
function BeersListController($scope, BeersService){

	BeersService
	.list()
	.success(function(data){
		$scope.list = data;
		$scope.message = 'Listagem feita com sucesso.';
	})
	.error(function(data){
		$scope.message = 'Listagem não pode ser feita.';
	});

	$scope.remove = function( beer ){

		BeersService
		.remove(beer)
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

function BeersCreateController($scope, BeersService){

	$scope.create = function ( beer ){
		BeersService
		.create(beer)
		.success(function(data){
			$scope.list = data;
			$scope.message = 'Cadastro feita com sucesso.';
		})
		.error(function(data){
			$scope.message = 'Cadastro não pode ser feita.';
		});
	};

};
function BeersGetController($scope, BeersService, $routeParams){

	BeersService
	.get($routeParams.id)
	.success(function(data){
		$scope.beer = data;
		$scope.message = 'Listagem feita com sucesso.';
	})
	.error(function(data){
		$scope.message = 'Listagem não pode ser feita.';
	});

};
function BeerEditController($scope, $http, $routeParams, BeersService){

	BeersService
	.edit($routeParams.id)
	.success(function(data){
		$scope.beer = data;
		$scope.message = 'Listagem feita com sucesso.';
	})
	.error(function(data){
		$scope.message = 'Listagem não pode ser feita.';
	});

	$scope.save = function ( beer ){
		BeersService
		.update($routeParams.id, beer)
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