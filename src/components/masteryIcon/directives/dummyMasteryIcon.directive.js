/*globals angular */
angular.module('mathCraft').directive('dummyMasteryIcon', function () {
    'use strict';
    return {
        restrict: 'E',
        transclude: false,
        templateUrl: 'components/masteryIcon/templates/dummyMasteryIcon.html',
        link: function (scope, element, attrs, ctrl) {
        }
    };
});