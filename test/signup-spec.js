//test script for the signup form app

describe('the signup app', function() {
    var fnameInp = element(by.model('signup.fname'));
    var requiredFName = $('.fname-required-error');
    var lnameInp = element(by.model('signup.lname'));
    var requiredLName = $('lname-required-error');

    var firstPasswordInput = element(by.model('signup.pass'));
    var secondPasswordInput = element(by.model('signup.passConf'));
    var passwordMatchError = $('.passwordError');

    beforeEach(function() {
        browser.get('http://localhost:8000');
    });

    it('must show unmatched passwords error', function() {

        expect(passwordMatchError.isPresent()).toBe(false);
        var first = 'originalPassword';
        var wrong = 'wrong';

        firstPasswordInput.sendKeys(first);
        secondPasswordInput.sendKeys(first);
        expect(passwordMatchError.isPresent()).toBe(false);
        firstPasswordInput.clear();
        secondPasswordInput.clear();

        firstPasswordInput.sendKeys(first);
        secondPasswordInput.sendKeys(wrong);
        expect(passwordMatchError.isPresent()).toBe(true);
        firstPasswordInput.clear();
        secondPasswordInput.clear();

        firstPasswordInput.sendKeys(wrong);
        secondPasswordInput.sendKeys(wrong);
        expect(passwordMatchError.isPresent()).toBe(false);
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