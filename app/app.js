"use strict";

var app = angular.module('QRBonApp', ['ngMaterial', 'ngRoute', 'ngResource', 'bonDetail']);


app.factory('BackendService', ['$resource', function ($resource) {
    return $resource('http://localhost:8080/#?:id',
        {},{
            get: {method: 'GET', isArray: false}
        }
    )
}]);


app.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider
        .when('/bon/:bonId', {
            template: '<bon-detail></bon-detail>'
        })
        .when('/about', {
            templateUrl: 'app/about/about.html'
        })
        .otherwise('/about')
    }
]);


// total filter from http://stackoverflow.com/a/26993269
app.filter('total', function () {
        return function (input, property) {
            var i = input instanceof Array ? input.length : 0;
            // if property is not defined, returns length of array
            // if array has zero length or if it is not an array, return zero
            if (typeof property === 'undefined' || i === 0) {
                return i;
            // test if property is number so it can be counted
            } else if (isNaN(input[0][property])) {
                throw 'filter total can count only numeric values';
            // finaly, do the counting and return total
            } else {
                var total = 0;
                while (i--)
                    total += input[i][property];
                return total;
            }
        };
    });