angular.module('appDetail')
.component('appDetail',{
	templateUrl: 'view/detail/detail-template.html',
    controller: ['$http','$routeParams','$scope',
      function AppDetailController($http,$routeParams,$scope) {
      	$http.get('apps/'+$routeParams.appId+'.json').then(function(response){
      		$scope.app =response.data;
      	});        
      }
    ]
});