// Persian Wordifier
// Version: 1.0
// Author: Salman Arab Ameri
// Publish: 2014-03-11
// with use of ideas in http://www.dotnettips.info/post/626/%D8%AA%D8%A8%D8%AF%DB%8C%D9%84-%D8%B9%D8%AF%D8%AF-%D8%A8%D9%87-%D8%AD%D8%B1%D9%88%D9%81

var wordifyfa = function (num, level) {
	'use strict';
    if (num === null) {
        return "";
	}
	// convert negative number to positive and get wordify value
	if (num<0) {
		num = num * -1;
		return "منفی " + wordifyfa(num, level); 
	}
    if (num === 0) {
        if (level === 0) {
            return "صفر";
		} else {
            return "";
		}
	}
	var result = "",
		yekan = [" یک ", " دو ", " سه ", " چهار ", " پنج ", " شش ", " هفت ", " هشت ", " نه "],
		dahgan = [" بیست ", " سی ", " چهل ", " پنجاه ", " شصت ", " هفتاد ", " هشتاد ", " نود "],
		sadgan = [" یکصد ", " دویست ", " سیصد ", " چهارصد ", " پانصد ", " ششصد ", " هفتصد ", " هشتصد ", " نهصد "],
		dah = [" ده ", " یازده ", " دوازده ", " سیزده ", " چهارده ", " پانزده ", " شانزده ", " هفده ", " هیجده ", " نوزده "];
    if (level > 0) {
        result += " و ";
        level -= 1;
    }
   
    if (num < 10) {
        result += yekan[num - 1];
    } else if (num < 20) {
        result += dah[num - 10];
    } else if (num < 100) {
        result += dahgan[parseInt(num / 10, 10) - 2] +  wordifyfa(num % 10, level + 1);
    } else if (num < 1000) {
        result += sadgan[parseInt(num / 100, 10) - 1] + wordifyfa(num % 100, level + 1);
    } else if (num < 1000000) {
        result += wordifyfa(parseInt(num / 1000, 10), level) + " هزار " + wordifyfa(num % 1000, level + 1);
    } else if (num < 1000000000) {
        result += wordifyfa(parseInt(num / 1000000, 10), level) + " میلیون " + wordifyfa(num % 1000000, level + 1);
    } else if (num < 1000000000000) {
        result += wordifyfa(parseInt(num / 1000000000, 10), level) + " میلیارد " + wordifyfa(num % 1000000000, level + 1);
    } else if (num < 1000000000000000) {
        result += wordifyfa(parseInt(num / 1000000000000, 10), level) + " تریلیارد " + wordifyfa(num % 1000000000000, level + 1);
    }
	return result;

};

var wordifyRials = function (num) {
	'use strict';
    return wordifyfa(num, 0) + " ریال";
};

var wordifyRialsInTomans = function (num) {
	'use strict';
    if (num >= 10) {
        num = parseInt(num / 10, 10);
    } else if (num<=-10) {
        num = parseInt(num/10,10);
    } else {
		num=0;
	}
	
    return wordifyfa(num, 0) + " تومان";
};

if (typeof module !== 'undefined' && module.exports) {
	module.exports.wordifyfa = wordifyfa;
	module.exports.wordifyRials = wordifyRials;
	module.exports.wordifyRialsInTomans = wordifyRialsInTomans;
}

