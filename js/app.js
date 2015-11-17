angular.module('SignupApp', [])
    // register a directive for custom validation of dates in the past
    .directive('moreThanThirteenAgo', function() {
        return {
            require: 'ngModel',
            link: function(scope, elem, attrs, controller) {
                controller.$validators.moreThanThirteenAgo = function(modelValue) {
                    if (modelValue) {
                        var thirteenYearAgo = new Date().getFullYear() - 13;
                        return (new Date(modelValue) <= new Date().setFullYear(thirteenYearAgo));
                    } else {
                        return true;
                    }
                }
            }
        };
    })
    // register a directive to check matching passwords
    .directive('pwCheck', [function () {
        return {
            require: 'ngModel',
            link: function (scope, elem, attrs, ctrl) {

                var me = attrs.ngModel;
                var matchTo = attrs.pwCheck;
                //console.log(ctrl.constructor.prototype)
                scope.$watchGroup([me, matchTo], function(value){
                    ctrl.$setValidity('pwmatch', value[0] === value[1] );
                })
            }
        }
    }])
    .controller('SignupController', function($scope) {
        $("#confirmation").hide();
        $scope.submitSignUp = function() {
            $("#confirmation").fadeIn();
            $('#signupForm').trigger("reset");
        }
    });