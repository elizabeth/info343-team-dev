//test script for the signup form app

describe('the signup app', function() {

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

});