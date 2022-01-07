import toEnglishDigits from '../src/toEnglishDigits';

const assert = require('assert');
describe('to english digits', function() {

    it('should return input as output when input is null', function() {
      assert.equal(toEnglishDigits(null), null);
    });

    it('should return null as output when input is undefined', function() {
      assert.equal(toEnglishDigits(undefined), null);
    });    

    it('should return input as output when input is empty', function() {
      assert.equal(toEnglishDigits(""), "");
    });       

    it('should return "0" when passing 0 as number', function() {
      assert.equal(toEnglishDigits(0), "0");
    });  

    it('should return "0" when passing "0" as string', function() {
      assert.equal(toEnglishDigits("0"), "0");
    });    

    it('should return "4" when passing "۴" as string', function() {
      assert.equal(toEnglishDigits("۴"), "4");
    });    

    it('should return "4" when passing "٤" as string', function() {
      assert.equal(toEnglishDigits("٤"), "4");
    });  

    it('should return "253647" when passing "۲۵۳۶۴۷" as string', function() {
      assert.equal(toEnglishDigits("۲۵۳۶۴۷"), "253647");
    });
    
    it('should return "253647" when passing "25۳۶47" as string', function() {
      assert.equal(toEnglishDigits("25۳۶47"), "253647");
    });    

    it('should return "253647" when passing "۲۵۳,۶۴۷" as string', function() {
      assert.equal(toEnglishDigits("۲۵۳,۶۴۷"), "253647");
    });

    it('should return "2536.47" when passing "۲۵۳۶.۴۷" as string', function() {
      assert.equal(toEnglishDigits("۲۵۳۶.۴۷"), "2536.47");
    });
});