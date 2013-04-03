define(["angular", "angular-mocks"],
    function (angular) {
        "use strict";

        /**
         * Utility class for testing Angular directives.
         *
         * @param module The Angular module that contains the directive.
         *
         * @author Bo Gotthardt
         */
        function DirectiveTester(module) {
            this.module = module;
        }

        /**
         * Create a compiled version of the specified HTML string.
         * This replaces any directives in it with their final templated form.
         *
         * @param {String} html The HTML string.
         * @return {jQuery} The compiled version.
         */
        DirectiveTester.prototype.compile = function (html) {
            angular.mock.module(this.module.name);
            var element;

            // See https://github.com/vojtajina/ng-directive-testing
            angular.mock.inject(function ($rootScope, $compile) {
                // It seems like the directive html must be wrapped in a div or compiling it will not change it.
                element = angular.element("<div>" + html + "</div>");
                $compile(element)($rootScope);
                $rootScope.$digest();
            });

            return element.children();
        };

        return DirectiveTester;
    });