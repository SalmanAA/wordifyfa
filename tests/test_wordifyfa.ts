import {wordifyfa} from '../src/wordifyfa';

const assert = require('assert');
describe('wordifyfa', function() {

    it('should return empty string when input is null', function() {
      assert.equal(wordifyfa(null), "");
    });

    it('should return empty string when input is empty', function() {
      assert.equal(wordifyfa(""), "");
    });

    it('should return "صفر" when input is 0', function() {
      assert.equal(wordifyfa(0), "صفر");
    });

    it('should return "صفر" when input is "000"', function() {
      assert.equal(wordifyfa("000"), "صفر");
    });
    
    it('should return "صفر" when input is "-0"', function() {
      assert.equal(wordifyfa("-0"), "صفر");
    });

    it('should return "صفر" when input is "+0"', function() {
      assert.equal(wordifyfa("+0"), "صفر");
    });

    it('should return "منفی یک" when input is "-1"', function() {
      assert.equal(wordifyfa("-1"), "منفی یک");
    });

    it('should return "منفی یکصد و بیست" when input is "-120"', function() {
      assert.equal(wordifyfa("-120"), "منفی یکصد و بیست");
    });

    it('should return "یکصد و بیست و پنج" when input is "125"', function() {
      assert.equal(wordifyfa("125"), "یکصد و بیست و پنج");
    });

    it('should return "چهارصد و پنجاه و هفت هزار و دویست" when input is "457200"', function() {
      assert.equal(wordifyfa("457200"), "چهارصد و پنجاه و هفت هزار و دویست");
    });

    it('should return correct result for number with thousand separator', function() {
      assert.equal(wordifyfa("457,200"), "چهارصد و پنجاه و هفت هزار و دویست");
    });
    it('should return correct result for big numbers', function() {
      assert.equal(wordifyfa("40000000000"), "چهل میلیارد");
    });    
});