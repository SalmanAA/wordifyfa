import {wordifyRialsInTomans} from '../src/wordifyfa';

const assert = require('assert');
describe('wordifyRialsInTomans', function() {

    it('should return empty string when input is null', function() {
      assert.equal(wordifyRialsInTomans(null), "");
    });
    it('should return empty string when input is empty', function() {
      assert.equal(wordifyRialsInTomans(""), "");
    });

    it('should return empty string when input is undefined', function() {
      assert.equal(wordifyRialsInTomans(undefined), "");
    });

    it('should return correct string when input is 0', function() {
      assert.equal(wordifyRialsInTomans(0), "صفر تومان");
    });    

    it('should return correct string when input is normal number', function() {
      assert.equal(wordifyRialsInTomans(190210), "نوزده هزار و بیست و یک تومان");
    });      

    it('should return correct string when input is comma separated string', function() {
      assert.equal(wordifyRialsInTomans("190,210"), "نوزده هزار و بیست و یک تومان");
    });        
});