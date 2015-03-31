/*globals angular */
angular.module('mathCraft').directive('masteryIcon', function () {
    'use strict';
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            mastery: '='
        },
        templateUrl: 'components/masteryIcon/templates/masteryIcon.html',
        link: function (scope, element, attrs, ctrl) {

        }
    };
});