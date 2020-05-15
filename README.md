Persian Wordifier converts simple numbers to words.
for example you can use this:

```javascript
var a = 235000;
var b = wordifyfa(a);
console.log(b); // دویست و سی و پنج هزار
var c = wordifyRials(a); // دویست و سی و پنج هزار ریال
var d = wordifyRialsInTomans(a); // بیست و سه هزار و پانصد تومان

```

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

# more info:
this code now supports max to 999,999,999,999,999. is it sufficient?

## Main Contributors
- [Salman Arab Ameri](http://salmanapps.ir/)  
- [Mohammad Bagher Ehtemam](https://github.com/MBehtemam)  
