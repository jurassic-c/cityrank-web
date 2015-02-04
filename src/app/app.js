angular.module( 'ngBoilerplate', [
  'templates-app',
  'templates-common',
  'ngBoilerplate.home',
  'ngBoilerplate.about',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location, $modal ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | City' ;
      $scope.open = function (size) {

        var modalInstance = $modal.open({
          templateUrl: 'loginModal.html',
          controller: 'LoginController'
        });
      };
    }
  });
})

.controller('LoginController', function LoginController($scope, $rootScope) {
  $scope.code_request_sent = false;
  $scope.use_password = false;
  $scope.show_login_button = false;
  $scope.send_code_request = function() {
    $scope.code_request_sent = true;
    $scope.show_login_button = true;
  };

  $scope.choose_use_password = function() {
    $scope.use_password = true;
    $scope.show_login_button = true;
  };
})

;

