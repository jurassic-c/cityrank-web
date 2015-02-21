angular.module('citrank.map',[
	'ui.router',
	'placeholders',
	'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'map', {
    url: '/map',
    views: {
      "main": {
        controller: 'MapCtrl',
        templateUrl: 'map/map.tpl.html'
      }
    },
    data:{ pageTitle: 'Find a Hotspot' }
  });
})

.controller( 'MapCtrl', function MapCtrl( $scope, $rootScope, $location ) {
  // This is simple a demo for UI Boostrap.
  $rootScope.authenticated = true;

    var map = new ol.Map({
    layers: [
      new ol.layer.Tile({source: new ol.source.OSM()})
    ],
    view: new ol.View({
      center: [0, 0],
      zoom: 2
    }),
    target: 'basicMap'
  });
})

;
