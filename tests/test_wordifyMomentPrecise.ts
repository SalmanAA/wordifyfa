import {wordifyMomentPrecise, momentPrecise} from '../src/wordifyfa';

const assert = require('assert');
describe('wordifyMoment', function() {

    it('should return empty string when input is null', function() {
      assert.equal(wordifyMomentPrecise(null), "");
    });

    it('precise for same time', function() {
      var date = new Date(2021,5,13,6,13,0);
      var baseDate = new Date(2021,5,13,6,13,0);

      assert.equal(wordifyMomentPrecise(date,baseDate), "بلافاصله");
    });

    it('precise uses current time if base is null', function() {
      var date = new Date(2021,5,13,6,13,0);
      var baseDate = new Date();
      var result1 =wordifyMomentPrecise(date,baseDate);
      var result2 =wordifyMomentPrecise(date); 
      assert.equal(result1,result2);
    });

    it('using string date works fine', function() {
      var date = new Date(2021,5,13,6,13,0);
      var baseDate = new Date(2021,5,13,6,15,0);
      var result1 = wordifyMomentPrecise(date,baseDate)
      var result2 = wordifyMomentPrecise('2021-06-13 6:13:00',baseDate)
      assert.equal(result1,result2);
    });

    it('using string date as base works fine', function() {
      var date = new Date(2021,5,13,6,13,0);
      var baseDate = new Date(2021,5,13,6,15,0);
      var result1 = wordifyMomentPrecise(date,baseDate)
      var result2 = wordifyMomentPrecise(date,'2021-06-13 6:15:00')
      assert.equal(result1,result2);
    });

    it('if difference is below zero, we use second suffix', function() {
      var date = new Date(2021,5,13,6,13,0);
      var baseDate = new Date(2021,5,13,6,11,0);

      assert.equal(wordifyMomentPrecise(date,baseDate), "دو دقیقه بعد");
    });

    it('momentprecise returns digits', function() {
      var date = new Date(2021,5,13,6,13,0);
      var baseDate = new Date(2021,5,13,6,11,0);

      assert.equal(momentPrecise(date,baseDate), "2 دقیقه بعد");
    });


    it('precise for below 1 minues ago', function() {
      var date = new Date(2021,5,13,6,13,0);
      var baseDate = new Date(2021,5,13,6,13,5);

      assert.equal(wordifyMomentPrecise(date,baseDate), "پنج ثانیه پیش");
    });

    it('precise for 2 minues ago', function() {
      var date = new Date(2021,5,13,6,13,0);
      var baseDate = new Date(2021,5,13,6,15,0);

      assert.equal(wordifyMomentPrecise(date,baseDate), "دو دقیقه پیش");
    });

    it('precise for 2 hour ago', function() {
      var date = new Date(2021,5,13,6,13,0);
      var baseDate = new Date(2021,5,13,8,15,0);

      assert.equal(wordifyMomentPrecise(date,baseDate), "دو ساعت و دو دقیقه پیش");
    });

    it('precise for 2 days ago', function() {
      var date = new Date(2021,5,13,6,13,0);
      var baseDate = new Date(2021,5,15,8,15,0);

      assert.equal(wordifyMomentPrecise(date,baseDate), "دو روز و دو ساعت و دو دقیقه پیش");
    });

    it('precise for 2 weeks ago', function() {
      var date = new Date(2021,5,13,6,13,0);
      var baseDate = new Date(2021,5,27,8,15,0);

      assert.equal(wordifyMomentPrecise(date,baseDate), "دو هفته و دو ساعت و دو دقیقه پیش");
    });    

    it('precise for 2 months ago', function() {
      var date = new Date(2021,5,13,6,13,0);
      var baseDate = new Date(2021,7,15,8,15,0);

      assert.equal(wordifyMomentPrecise(date,baseDate), "دو ماه و دو روز و پنج ساعت و دو دقیقه پیش");
    });    

    it('precise for 2 years ago', function() {
      var date = new Date(2021,5,13,6,13,0);
      var baseDate = new Date(2023,5,15,8,15,0);

      assert.equal(wordifyMomentPrecise(date,baseDate), "دو سال و یک روز و چهارده ساعت و دو دقیقه پیش");
    });    
});