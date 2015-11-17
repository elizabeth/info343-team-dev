angular.module('SignupApp', [])
<<<<<<< HEAD
    //the direcitve will be invalid if the date is less than 13 years from now
    //fow example, 11/20/2002 will be invalid
    .directive('moreThanThirteenAgo', function() {
=======
    // register a directive for custom validation of dates in the past
    .directive('inThePast', function() {
>>>>>>> master
        return {
            require: 'ngModel',
            link: function(scope, elem, attrs, controller) {
                controller.$validators.inThePast = function(modelValue) {
                    var today = new Date();
                    return (new Date(modelValue) <= today);
                }
            }
        };
    })
<<<<<<< HEAD
    //the directive will be invalid if the input is not a date
    //for example: swad, 15555
    .directive('isDate', function() {
=======
    // register a directive to check matching passwords
    .directive('pwCheck', [function () {
>>>>>>> master
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
<<<<<<< HEAD

        //there should be ng-submit=submitSignUp in html form
        //also create a model confirmation to show confirmation message
=======
        $("#confirmation").hide();
>>>>>>> master
        $scope.submitSignUp = function() {
            $("#confirmation").fadeIn();
            $('#signupForm').trigger("reset");
        }
    });