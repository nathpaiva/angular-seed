'use strict';

angular.module('myApp.Beers', [
	'ngRoute',
	'myApp.Beers.Controllers',
	'myApp.Beers.Service'
	])
.config(['$routeProvider', beersListConfig]);

// Config
function beersListConfig ($routeProvider){
	$routeProvider.when('/beers', {
		templateUrl: 'modules/beers/views/list.html',
		controller: 'BeersListController'
	})
	.when('/create', {
		templateUrl: 'modules/beers/views/create.html',
		controller: 'BeersCreateController'
	})
	.when('/beers/:id', {
		templateUrl: 'modules/beers/views/get.html',
		controller: 'BeersGetController'
	})
	.when('/beers/:id/edit', {
		templateUrl: 'modules/beers/views/edit.html',
		controller: 'BeerEditController'
	});
};

// beersListConfig['$inject'] = ['$routeProvider'];