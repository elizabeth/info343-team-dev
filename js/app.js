angular.module('SignupApp', [])
    .directive('moreThanThirteenAgo', function() {
        return {
            require: 'ngModel',
            link: function(scope, elem, attrs, controller) {
                controller.$validators.moreThanThirteenAgo = function(modelValue) {
                    if(modelValue) {
                        var thirteenYearAgo = new Date().getFullYear() - 13;
                        return (new Date(modelValue) <= new Date().setFullYear(thirteenYearAgo));
                    } else {
                        return true;
                    }

                }
            }
        };
    })
    .directive('isDate', function() {
        return {
            require: 'ngModel',
            link: function(scope, elem, attrs, controller) {
                controller.$validators.isDate = function(modelValue) {
                    if(modelValue) {
                        return !isNaN(Date.parse(modelValue));
                    } else {
                        return true;
                    }

                }
            }
        };
    })
    .controller('SignupController', function($scope) {

        $scope.submitSignUp = function() {
            $scope.confirmation = 'you have signed up';
            $scope = null;
        }
    });