import {wordifyMomentApprox, momentApprox} from '../src/wordifyfa';

const assert = require('assert');
describe('wordifyMoment', function() {

    it('should return empty string when input is null', function() {
      assert.equal(wordifyMomentApprox(null), "");
    });

    it('approx for same time', function() {
      var date = new Date(2021,5,13,6,13,0);
      var baseDate = new Date(2021,5,13,6,13,0);

      assert.equal(wordifyMomentApprox(date,baseDate), "بلافاصله");
    });

    it('approx uses current time if base is null', function() {
      var date = new Date(2021,5,13,6,13,0);
      var baseDate = new Date();
      var result1 =wordifyMomentApprox(date,baseDate);
      var result2 =wordifyMomentApprox(date); 
      assert.equal(result1,result2);
    });

    it('using string date works fine', function() {
      var date = new Date(2021,5,13,6,13,0);
      var baseDate = new Date(2021,5,13,6,15,0);
      var result1 = wordifyMomentApprox(date,baseDate)
      var result2 = wordifyMomentApprox('2021-06-13 6:13:00',baseDate)
      assert.equal(result1,result2);
    });

    it('using string date as base works fine', function() {
      var date = new Date(2021,5,13,6,13,0);
      var baseDate = new Date(2021,5,13,6,15,0);
      var result1 = wordifyMomentApprox(date,baseDate)
      var result2 = wordifyMomentApprox(date,'2021-06-13 6:15:00')
      assert.equal(result1,result2);
    });

    it('if difference is below zero, we use second suffix', function() {
      var date = new Date(2021,5,13,6,13,0);
      var baseDate = new Date(2021,5,13,6,11,0);

      assert.equal(wordifyMomentApprox(date,baseDate), "دو دقیقه بعد");
    });

    it('momentApprox returns digits', function() {
      var date = new Date(2021,5,13,6,13,0);
      var baseDate = new Date(2021,5,13,6,11,0);

      assert.equal(momentApprox(date,baseDate), "2 دقیقه بعد");
    });


    it('approx for below 1 minues ago', function() {
      var date = new Date(2021,5,13,6,13,0);
      var baseDate = new Date(2021,5,13,6,13,5);

      assert.equal(wordifyMomentApprox(date,baseDate), "چند لحظه پیش");
    });

    it('approx for 2 minues ago', function() {
      var date = new Date(2021,5,13,6,13,0);
      var baseDate = new Date(2021,5,13,6,15,0);

      assert.equal(wordifyMomentApprox(date,baseDate), "دو دقیقه پیش");
    });

    it('approx for 2 hour ago', function() {
      var date = new Date(2021,5,13,6,13,0);
      var baseDate = new Date(2021,5,13,8,15,0);

      assert.equal(wordifyMomentApprox(date,baseDate), "دو ساعت پیش");
    });

    it('approx for 2 days ago', function() {
      var date = new Date(2021,5,13,6,13,0);
      var baseDate = new Date(2021,5,15,8,15,0);

      assert.equal(wordifyMomentApprox(date,baseDate), "دو روز پیش");
    });

    it('approx for 2 weeks ago', function() {
      var date = new Date(2021,5,13,6,13,0);
      var baseDate = new Date(2021,5,27,8,15,0);

      assert.equal(wordifyMomentApprox(date,baseDate), "دو هفته پیش");
    });    

    it('approx for 2 months ago', function() {
      var date = new Date(2021,5,13,6,13,0);
      var baseDate = new Date(2021,7,15,8,15,0);

      assert.equal(wordifyMomentApprox(date,baseDate), "دو ماه پیش");
    });    

    it('approx for 2 years ago', function() {
      var date = new Date(2021,5,13,6,13,0);
      var baseDate = new Date(2023,5,15,8,15,0);

      assert.equal(wordifyMomentApprox(date,baseDate), "دو سال پیش");
    });    
});