//test script for the signup form app

describe('the signup app', function() {
   
    function addMultipleTasks(num) {
        var idx;
        for (idx = 0; idx < num; ++idx) {
            addTask('Task ' + idx);
        }
    }

    beforeEach(function() {
        browser.get('http://localhost:8000');
    });
});