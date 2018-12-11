'use strict';

// Define the `phonecatApp` module
var MapApp = angular.module('MapApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
MapApp.controller('MapListController', function MapListController($scope) {
  $scope.locations = [
    {
      mapname: 'qbnano3',
      timelimit: '10'
    }, {
      mapname: 'qbwsedit2',
      timelimit: '20'
    }, {
      mapname: '4qbn',
      timelimit: '20'
    },{
      mapname: 'q3dm14',
      timelimit: '15'
    },{
      mapname: 'q3ctf2',
      timelimit: '25'
    }
	 ];
});