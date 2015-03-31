/*global angular */
angular.module('mathCraft').controller('masteryPageController', function ($scope, masteryService) {
    'use strict';

    masteryService.getAllMasteries().then(function (data) {
        console.log(data);
    });
});