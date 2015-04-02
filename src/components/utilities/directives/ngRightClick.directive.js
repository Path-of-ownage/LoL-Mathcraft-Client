/*globals angular */
angular.module('mathCraft').directive('ngRightClick', function ($parse) {
    'use strict';
    return function (scope, element, attrs) {
        var fn = $parse(attrs.ngRightClick);
        element.bind('contextmenu', function (event) {
            scope.$apply(function () {
                event.preventDefault();
                fn(scope, {
                    $event: event
                });
            });
        });
    };
});