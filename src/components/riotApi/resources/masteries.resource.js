/*globals angular */
angular.module('mathCraft').factory('masteriesResource', function ($resource, apiService) {
    'use strict';
    
    return $resource('https://global.api.pvp.net/api/lol/static-data/euw/v1.2/mastery?masteryListData=:masteryListData&api_key=' + apiService.getApiKey());
});