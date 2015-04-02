/*globals angular */
angular.module('mathCraft').directive('masteryIcon', function () {
    'use strict';
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            mastery: '=',
            rank: '=',
            unusedPoints: '='
        },
        controller: function ($scope) {
            $scope.incrementRank = function () {
                if ($scope.rank.rank >= $scope.mastery.ranks) {
                    return;
                }
                $scope.rank.rank += 1;
            };

            $scope.decrementRank = function () {
                if ($scope.rank.rank <= 0) {
                    return;
                }
                $scope.rank.rank -= 1;
            };
        },
        templateUrl: 'components/masteryIcon/templates/masteryIcon.html',
        link: function (scope, element, attrs, ctrl) {}
    };
});