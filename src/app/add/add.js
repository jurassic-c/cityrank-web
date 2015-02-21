angular.module('citrank.add',[
	'ui.router',
	'placeholders',
	'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'add', {
    url: '/add',
    views: {
      "main": {
        controller: 'AddCtrl',
        templateUrl: 'add/add.tpl.html'
      }
    },
    data:{ pageTitle: 'Report a Hotspot' }
  });
})

.controller( 'AddCtrl', function AddCtrl( $scope, $rootScope, $location ) {
  // This is simple a demo for UI Boostrap.
  $rootScope.authenticated = true;

  $scope.hotspot_report = {
    report_type: '',
    connectivity_score: 3,
    speed_score: 3,
    price_type: 'free',
    security_type: 'none'
  };
  $scope.currency = 'MX';

  if(!$rootScope.authenticated) {
    $rootScope.loginPopup();
  }

  $scope.type_labels = {
    free: {type: "free", label: "Free"},
    free_w_purchase: {type: "free_w_purchase", label: "Free with Purchase"},
    per_hour: {type: "per_hour", label: "Per Hour"},
    per_day: {type: "per_day", label: "Per Day"}
  };

  $scope.frequency_labels = [
    {idx: 0, label: "Rarely"},
    {idx: 1, label: "Sometimes"},
    {idx: 2, label: "Frequently"},
    {idx: 3, label: "It's Ridiculous"}
  ];

  $scope.security_labels = {
    none: {type: 'none', label: 'None'},
    wep: {type: 'wep', label: 'WEP'},
    wpa: {type: 'wpa', label: 'WPA / WPA2'}
  };

  $scope.submit_report = function() {
    $location.path("/");
  };

  $scope.cancel_report = function() {
    $location.path("/");
  };
})

;
