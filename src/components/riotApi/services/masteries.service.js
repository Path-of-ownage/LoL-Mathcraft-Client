/*globals angular */
angular.module('mathCraft').service('masteryService', function ($q, masteriesResource) {
    'use strict';
    var self = this;

    this.getMasteryData = function (masteryListData) {
        var deferred = $q.defer();
        masteriesResource.get({
            masteryListData: masteryListData
        }, function (data) {
            deferred.resolve(data);
        });
        return deferred.promise;
    };

    this.getAllMasteries = function () {
        var deferred = $q.defer();
        if (self.allMasteryInfo !== undefined) {
            deferred.resolve(self.allMasteryInfo);
        } else {
            masteriesResource.get({
                masteryListData: 'all'
            }, function (data) {
                deferred.resolve(data);
                self.allMasteryInfo = data;
            });
        }
        return deferred.promise;
    };

});