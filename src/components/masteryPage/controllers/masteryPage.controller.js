/*global angular */
angular.module('mathCraft').controller('masteryPageController', function ($scope, masteryService, jsonUtilService) {
    'use strict';

    $scope.masteryRanks = {};
    $scope.unusedPoints = {
        points: 30
    }

    masteryService.getAllMasteries().then(function (data) {
        $scope.masteries = data;
        $scope.masteryTree = jsonUtilService.convertToArray(data.tree);
    });

    $scope.getMasteryFromId = function (id) {
        return $scope.masteries.data[id];
    };

    $scope.getMasteryRank = function (id) {
        if (angular.isDefined($scope.masteryRanks[id])) {
            return $scope.masteryRanks[id];
        } else {
            $scope.masteryRanks[id] = {
                rank: 0
            };
        }
    };
});