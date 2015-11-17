//test script for the signup form app

describe('the signup app', function() {
    var lnameInp = element(by.model('signup.lname'));
    var requiredLName = $('.lname-required-error');
    var emailInp = element(by.model('signup.email'));
    var requiredEmail = $('.email-required-error');
    var invalidEmail = $('.email-invalid-error');
    var firstPasswordInput = element(by.model('signup.pass'));
    var secondPasswordInput = element(by.model('signup.passConf'));
    var passwordMatchError = $('.passwordError');
    var dob = element(by.model('signup.dob'));
    var notThirteen = $('.notThirteen');
    var requiredDob = $('.requiredDob');

    beforeEach(function() {
        browser.get('http://localhost:8000');
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

    it('must show age limit error', function () {
        expect(requiredDob.isPresent()).toEqual(false);
        expect(notThirteen.isPresent()).toEqual(false);
        dob.sendKeys('04/04/1994');
        dob.clear();
        expect(requiredDob.isPresent()).toEqual(true);
        dob.sendKeys('04/04/1994');
        expect(notThirteen.isPresent()).toEqual(false);
        dob.clear();
        dob.sendKeys('11/11/2014');
       	expect(notThirteen.isPresent()).toEqual(true); 

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
    
    it('must require last name', function() {
        expect(requiredLName.isPresent()).toEqual(false);
        lnameInp.sendKeys('a');
        expect(requiredLName.isPresent()).toEqual(false);
        lnameInp.clear();
        expect(requiredLName.isPresent()).toEqual(true);
    });
});