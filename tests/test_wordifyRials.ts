import {wordifyRials} from '../src/wordifyfa';

const assert = require('assert');
describe('wordifyRials', function() {

    it('should return empty string when input is null', function() {
      assert.equal(wordifyRials(null), "");
    });
    it('should return empty string when input is empty', function() {
      assert.equal(wordifyRials(""), "");
    });

    it('should return empty string when input is undefined', function() {
      assert.equal(wordifyRials(undefined), "");
    });

    it('should return correct string when input is 0', function() {
      assert.equal(wordifyRials(0), "صفر ریال");
    });    

    it('should return correct string when input is normal number', function() {
      assert.equal(wordifyRials(190210), "یکصد و نود هزار و دویست و ده ریال");
    });      

    it('should return correct string when input is comma separated string', function() {
      assert.equal(wordifyRials("190,210"), "یکصد و نود هزار و دویست و ده ریال");
    });        
});