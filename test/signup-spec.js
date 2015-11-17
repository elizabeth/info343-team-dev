//test script for the signup form app

describe('the signup app', function() {
    var emailInp = element(by.model('signup.email'));
    var requiredEmail = $('.email-required-error');

    beforeEach(function() {
        browser.get('http://localhost:8080');
    });

    it('must show validation error for email', function () {
        expect(requiredEmail.isPresent()).toEqual(false);
        emailInp.sendKeys('abc');
        expect(requiredEmail.isPresent()).toEqual(true);
    });
});