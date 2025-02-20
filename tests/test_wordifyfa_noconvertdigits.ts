import {wordifyfa} from '../src/wordifyfa';

const assert = require('assert');
describe('wordifyfa', function() {

    it('should return "صفر" when input is 0', function() {
      assert.equal(wordifyfa(0, {convertDigits: false}), "0");
    });

    it('should return "صفر" when input is "000"', function() {
      assert.equal(wordifyfa("000", {convertDigits: false}), "0");
    });
    
    it('should return "صفر" when input is "-0"', function() {
      assert.equal(wordifyfa("-0", {convertDigits: false}), "0");
    });

    it('should return "صفر" when input is "+0"', function() {
      assert.equal(wordifyfa("+0", {convertDigits: false}), "0");
    });

    it('should return "منفی یک" when input is "-1"', function() {
      assert.equal(wordifyfa("-1", {convertDigits: false}), "-1");
    });

    it('should return "منفی یکصد و بیست" when input is "-120"', function() {
      assert.equal(wordifyfa("-120", {convertDigits: false}), "-120");
    });

    it('should return "یکصد و بیست و پنج" when input is "125"', function() {
      assert.equal(wordifyfa("125",{convertDigits: false}), "125");
    });

    it('should return "چهارصد و پنجاه و هفت هزار و دویست" when input is "457200"', function() {
      assert.equal(wordifyfa("457200", {convertDigits: false}), "457 هزار و 200");
    });

    it('should return correct result for number with thousand separator', function() {
      assert.equal(wordifyfa("457,200", {convertDigits: false}), "457 هزار و 200");
    });

    it('should return correct result for big numbers', function() {
      assert.equal(wordifyfa("40000000000", {convertDigits: false}), "40 میلیارد");
    });    

    it('should return correct result for milion numbers', function() {
      assert.equal(wordifyfa("128000130", {convertDigits: false}), "128 میلیون و 130");
    });     

    it('should return correct result for triliard numbers', function() {
      assert.equal(wordifyfa("9000000000000", {convertDigits: false}), "9 تریلیارد");
    });     

    it('should return correct result for biggest possible number', function() {
      assert.equal(wordifyfa("999999999999999", {convertDigits: false}), "999 تریلیارد و 999 میلیارد و 999 میلیون و 999 هزار و 999");
    });     
    it('level is optional', function() {
      assert.equal(wordifyfa("120",{convertDigits: false}), "120");
    });       
});