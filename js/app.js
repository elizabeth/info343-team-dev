angular.module('SignupApp', [])
    //the direcitve will be invalid if the date is less than 13 years from now
    //fow example, 11/20/2002 will be invalid
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
    //the directive will be invalid if the input is not a date
    //for example: swad, 15555
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

        //there should be ng-submit=submitSignUp in html form
        //also create a model confirmation to show confirmation message
        $scope.submitSignUp = function() {
            $scope.confirmation = 'you have signed up';
            $scope = null;
        }
    });