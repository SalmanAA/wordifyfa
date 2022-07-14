Persian Wordifier converts numbers to words.
for example you can use this:

```javascript
var a = 235000;
var b = wordifyfa(a);
console.log(b); // دویست و سی و پنج هزار
var c = wordifyRials(a); // دویست و سی و پنج هزار ریال
var d = wordifyRialsInTomans(a); // بیست و سه هزار و پانصد تومان
var e = wordifyMomentApprox(new Date(2022,4,4,10,20,0)); // هفت ساعت پیش 
var f = wordifyMomentApprox(new Date(2022,4,4,10,20,0), new Date(2022,4,4,10,21,0), "قبل","بعد"); // یک دقیقه بعد 
var g = wordifyMomentApprox("2022-05-04 10:20:00"); // هفت ساعت پیش
var h = momentApprox("2022-05-04 10:20:00"); // 7 ساعت پیش
var i = wordifyMomentPrecise("2022-05-04 10:20:00"); // هفت ساعت و پنج دقیقه و بیست ثانیه پیش
var j = momentPrecise("2022-05-04 10:20:00"); // 7 ساعت و 5 دقیقه و 20 ثانیه پیش

```

*Warning!* in javascript, month starts from zero so new Date(2022,4,4,10,20,0) means month 5 (May)

# update (2022-07-14)
- precise time calculation added

# update (2022-05-15)
- approximate time calculation added

# update (2020-05-15)
- project source reimplemented in typescript

# update (2020-04-18)
- npm package created (npm i wordifyfa)

# update (2020-03-11)
- non english digits support (arabic/persian)
```javascript
var a = '۱۲۰۳۴۵۱۰۲';
var b = wordifyfa(a);
console.log(b); // یکصد و بیست میلیون و سیصد و چهل و پنج هزار و صد و یکصد و دو
```

# update (2019-09-11)
- string and thousands separated numbers now supported
```javascript
var a = '120,345,102';
var b = wordifyfa(a);
console.log(b); // یکصد و بیست میلیون و سیصد و چهل و پنج هزار و صد و یکصد و دو
```

# installation:
1- add this line of code in your html.
```html
<script src="wordifyfa.js"></script>
```	

or if you are using Node.js 

```shell
npm i wordifyfa
```

```javascipt 
var wf = require('wordifyfa.js');
```

2- use the code.

in javascript:

```javascript
    var a = 93390;
    var b = wordifyfa(a); // نود و سه هزار و سیصد و نود
```

in Node.js:

```javascript
    var a = 93390;
    var b = wf.wordifyfa(a); // نود و سه هزار و سیصد و نود
```	

following examples are in javascript. if you want use it in Node.js, you must change it as same as previous sample.

# functions:
## 1 converts number to words
```javascript
	wordifyfa(number) 
	wordifyfa(43); // چهل و سه
```	

or in Node.js :
```javascript
	var a = require('./wordifyfa.js');
	a.wordifyfa(number);
```
## 2 converts number to words with Rial sign
```javascript
	wordifyRials(number) 
	wordifyRials(400); // چهارصد ریال
```

or in Node : 
```javascript
	var a = require('./wordifyfa.js');
	a.worifyfaRials(number);
```
	
## 3 converts number that is in Rials to Tomans and wordifies it

```javascript
	wordifyRialsInTomans(number) 
	wordifyRialsInTomans(5000); // پانصد تومان
```

or in Node : 
```javascript
	var a = require('./wordifyfa.js');
	a.wordifyRialsInTomans(number);
```

## 4 supports converting persian and arabic digits 

```javascript
	wordifyfa('۱۲۰۰۰۰')
```
## 5 convert dates to approximate time in words
```javascript
	wordifyMomentApprox(date,[base date=current time],[suffix if date is before base date='پیش'], [suffix if date is after base date = 'بعد']);
	// date and base date can be string or date object
	// base date and suffixes are optional
```
## 6 convert dates to approximate time in digits
```javascript
	momentApprox(date,[base date=current time],[suffix if date is before base date='پیش'], [suffix if date is after base date = 'بعد']);
	// date and base date can be string or date object
	// base date and suffixes are optional
```
## 7 convert dates to precise time difference (year/month/week/day/hour/minute/second) in words
```javascript
	wordifyMomentPrecise(date,[base date=current time],[suffix if date is before base date='پیش'], [suffix if date is after base date = 'بعد']);
	// date and base date can be string or date object
	// base date and suffixes are optional
```
## 8 convert dates to precise time difference (year/month/week/day/hour/minute/second) in digits
```javascript
	momentPrecise(date,[base date=current time],[suffix if date is before base date='پیش'], [suffix if date is after base date = 'بعد']);
	// date and base date can be string or date object
	// base date and suffixes are optional
```
# more info:
this code now supports max to 999,999,999,999,999. is it sufficient?

## Main Contributors
- [Salman Arab Ameri](http://salmanapps.ir/)  
- [Mohammad Bagher Ehtemam](https://github.com/MBehtemam)  
