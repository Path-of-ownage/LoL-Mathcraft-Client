/*global angular */
angular.module('mathCraft').controller('masteryPageController', function ($scope, masteryService, jsonUtilService) {
    'use strict';

    masteryService.getAllMasteries().then(function (data) {
        $scope.masteries = data;
        $scope.masteryTree = jsonUtilService.convertToArray(data.tree);
    });

    $scope.getMasteryFromId = function (id) {
        return $scope.masteries.data[id];
    };
});