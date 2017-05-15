angular.module('storeApp')
.config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/apps', {
          template: '<apps-list></apps-list>'
        }).
        when('/apps/:appId', {
          template: '<app-detail></app-detail>'
        }).
        otherwise('/apps');
    }
  ]);
