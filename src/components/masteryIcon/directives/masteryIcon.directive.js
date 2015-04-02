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
            function hasUnusedPoints() {
                if ($scope.unusedPoints.points > 0) {
                    return true;
                } else {
                    return false;
                }
            }
            $scope.incrementRank = function () {
                if (!hasUnusedPoints()) {
                    return;
                }
                if ($scope.rank.rank >= $scope.mastery.ranks) {
                    return;
                }
                $scope.rank.rank += 1;
                $scope.unusedPoints.points -= 1;
            };

            $scope.decrementRank = function () {
                if (!hasUnusedPoints()) {
                    return;
                }
                if ($scope.rank.rank <= 0) {
                    return;
                }
                $scope.rank.rank -= 1;
                $scope.unusedPoints.points += 1;
            };
        },
        templateUrl: 'components/masteryIcon/templates/masteryIcon.html',
        link: function (scope, element, attrs, ctrl) {}
    };
});