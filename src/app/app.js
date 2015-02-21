angular.module( 'ngBoilerplate', [
  'templates-app',
  'templates-common',
  'ngBoilerplate.home',
  'ngBoilerplate.about',
  'citrank.add',
  'citrank.map',
  'ui.router',
  'ngResource',
  'appStorage',
  'UserModule'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.run( function run ($rootScope, $modal) {
  $rootScope.authenticated = false;
  $rootScope.user = null;

  $rootScope.loginPopup = function () {

    var modalInstance = $modal.open({
      templateUrl: 'loginModal.html',
      controller: 'LoginController'
    });
  };

  $rootScope.logout = function() {
    $rootScope.authenticated = false;
    $rootScope.user = null;
  };
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location, $modal ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | City' ;
    }
  });
})

.controller('LoginController', ['$scope', '$rootScope', 'User', '$modalInstance', function LoginController($scope, $rootScope, User, $modalInstance) {
  $scope.code_request_sent = false;
  $scope.use_password = false;
  $scope.show_login_button = false;
  $scope.login_user = {};
  $scope.send_code_request = function() {
    $scope.code_request_sent = true;
    $scope.show_login_button = true;
  };

  $scope.choose_use_password = function() {
    $scope.use_password = true;
    $scope.show_login_button = true;
  };

  $scope.close = function() {
    $modalInstance.close();
  };

  $scope.login = function() {
    console.log($scope.login_user);
    User.authenticate($scope.login_user).$promise.then(
      // Success
      function(data) {
        $rootScope.authenticated = true;
        $rootScope.user = data.user;
        $modalInstance.close();
      },
      // Failure
      function(data) {
        console.log(data);
      }
    );
  };
}])

;

