'use strict';

/* Controllers */

function AppCtrl($scope, $http) {

  $http({method: 'GET', url: 'http://swapi.co/api/starships/'}).
  success(function(data, status, headers, config) {
    $scope.result = data.results;
    $scope.starships = [];
    angular.forEach($scope.result , function(starship) {
        var url = starship.url ;
        starship.crew = parseFloat(starship.crew);
        if (url.includes("/5/") || url.includes("/9/") || url.includes("/10/") || url.includes("/11/") || url.includes("/15/")) {
          $scope.starships.push(starship);
        };
    });

    // $scope.starships = orderBy($scope.starships, crew, true);
  }).
  error(function(data, status, headers, config) {
    $scope.name = 'Error!'
  });

  $scope.submit = function (item) {
    item.crew = parseFloat(item.crew);
    item.lastModification = new Date();
  }
}

