
angular.
  module('appsList')
  .component('appsList', {
    templateUrl: 'view/list/list-template.html',
    controller: ['$scope','$http',function AppListController($scope,$http) {
    	$scope.orderProp="name";
      	$http.get('apps/app.json').success(function(data){
      		$scope.apps=data;
      });
    }]
  })
  