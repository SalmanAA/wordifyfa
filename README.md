Persian Wordifier converts simple numbers to words.
for example you can use this:

```javascript
var a = 235000;
var b = wordifyfa(a);
console.log(b); // دویست و سی و پنج هزار
var c = wordifyRials(a); // دویست و سی و پنج هزار ریال
var d = wordifyRialsInTomans(a); // بیست و سه هزار و پانصد تومان

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

or if you using Node.js 

```javascipt 
var wordifyfa = require('./wordifyfa.js');
````

2- use the code.
```javascript
    var a = 93390;
    var b = wordifyfa(a); // نود و سه هزار و سیصد و نود
```	

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
````
	
## 3 converts number that is in Rials to Tomans and wordifies it

```javascript
	wordifyRialsInTomans(number) 
	wordifyRialsInTomans(5000); // پانصد تومان
```

or in Node : 
```javascript
	var a = require('./wordifyfa.js');
	a.wordifyRialsInTomans(number);
````

# more info:
this code now supports max to 999,999,999,999,999. is it sufficient?

## Main Contributors
- [Salman Arab Ameri](http://salmanapps.ir/)  
- [Mohammad Bagher Ehtemam](https://github.com/MBehtemam)  
