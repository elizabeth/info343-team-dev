//test script for the signup form app

describe('the signup app', function() {
    var emailInp = element(by.model('signup.email'));
    var requiredEmail = $('.email-required-error');
    var invalidEmail = $('.email-invalid-error');

    beforeEach(function() {
        browser.get('http://localhost:8080');
    });

    it('must have the proper page title', function () {
        expect(browser.getTitle()).toEqual('Sign Up Form');
    });

    it('must show required error for email', function () {
        expect(requiredEmail.isPresent()).toEqual(false);
        emailInp.sendKeys('abc');
        emailInp.clear();
        expect(requiredEmail.isPresent()).toEqual(true);
        emailInp.sendKeys('abc');
        expect(requiredEmail.isPresent()).toEqual(false);
        emailInp.clear();
    });

    it('must enter a valid email', function () {
        expect(invalidEmail.isPresent()).toEqual(false);
        emailInp.sendKeys('youremail.com');
        expect(invalidEmail.isPresent()).toEqual(true);
        emailInp.clear();
        emailInp.sendKeys('your@email.com');
        expect(invalidEmail.isPresent()).toEqual(false);
        emailInp.clear();
    });
});