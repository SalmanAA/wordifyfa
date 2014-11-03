Persian Wordifier converts simple numbers to words.
for example you can use this:

```
var a = 235000;
var b = wordifyfa(a);
console.log(b); // دویست و سی و پنج هزار
var c = wordifyRials(a); // دویست و سی و پنج هزار ریال
var d = wordifyRialsInTomans(a); // بیست و سه هزار و پانصد تومان

```
#installation:
1- add this line of code in your html.
```html
<script src="wordifyfa.js"></script>
```	
2- use the code.
```javascript
    var a = 93390;
    var b = wordifyfa(a); // نود و سه هزار و سیصد و نود
```	

#functions:
##1 converts number to words
```javascript
	wordifyfa(number) 
	wordifyfa(43); // چهل و سه
```	
##2 converts number to words with Rial sign
```javascript
	wordifyRials(number) 
	wordifyRials(400); // چهارصد ریال
	````
	
##3 converts number that is in Rials to Tomans and wordifies it

	wordifyRialsInTomans(number) 
	wordifyRialsInTomans(5000); // پانصد تومان
	
# more info:
this code now supports max to 999,999,999,999,999. is it sufficient?
