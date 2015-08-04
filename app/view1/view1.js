// 'use strict';

// angular.module('myApp.view1', ['ngRoute'])

// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/view1', {
//     templateUrl: 'view1/view1.html',
//     controller: 'View1Ctrl'
//   });
// }])

// .controller('View1Ctrl', [function() {

// }]);

'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', view1Config])

.controller('View1Ctrl', function(){

console.log("aqui");
});

function view1Config ($routeProvider){
	$routeProvider.when('/view1', {
		templateUrl: 'view1/view1.html',
		controller: 'View1Ctrl'
	});
}

view1Config['$inject'] = ['$routeProvider'];