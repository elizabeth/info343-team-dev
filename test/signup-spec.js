//test script for the signup form app

describe('the signup app', function() {
    var fnameInp = element(by.model('signup.fname'));
    var requiredFName = $('.fname-required-error');
    var lnameInp = element(by.model('signup.lname'));
    var requiredLName = $('lname-required-error');

    function addMultipleTasks(num) {
        var idx;
        for (idx = 0; idx < num; ++idx) {
            addTask('Task ' + idx);
        }
    }

    beforeEach(function() {
        browser.get('http://localhost:8080');
    });

    it('must require first name', function () {
        expect(requiredFName.isPresent()).toEqual(false);
        fnameInp.sendKeys('a');
        expect(requiredFName.isPresent()).toEqual(true);
        fnameInp.clear();
        expect(requiredFName.isPresent()).toEqual(false);
    });

    it('must require last name', function() {
        expect(requiredLName.isRresent()).toEqual(false);
        lnameInp.sendKeys('a');
        expect(requiredLName.isPresent()).toEqual(true);
        lnameInp.clear();
        expect(requiredLName.isPresent()).toEqual(false);
    });
});