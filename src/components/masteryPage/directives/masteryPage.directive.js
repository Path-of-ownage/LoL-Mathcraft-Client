/*globals angular */
angular.module('mathCraft').directive('masteryPage', function () {
    'use strict';
    return {
        restrict: 'E',
        transclude: true,
        scope: {
        },
        controller: 'masteryPageController',
        templateUrl: 'components/masteryPage/templates/masteryPage.html',
        link: function (scope, element, attrs, ctrl) {

        }
    };
});