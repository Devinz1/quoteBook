var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, dataService){
	
   var getData = function(){
   	$scope.quotes = dataService.getData();
 };
   getData();

});