// Persian Wordifier
// Version: 1.3.0
// Author: Salman Arab Ameri
// Publish: 2020-05-15
// with use of ideas in http://www.dotnettips.info/post/626/%D8%AA%D8%A8%D8%AF%DB%8C%D9%84-%D8%B9%D8%AF%D8%AF-%D8%A8%D9%87-%D8%AD%D8%B1%D9%88%D9%81

import toEnglishDigits from "./toEnglishDigits";

export function wordifyfa(input:string|number, level:number=0):string {
    

    if (input === null) {
        return "";
    }

    var num:number = parseInt(toEnglishDigits(input));
    

    // convert negative number to positive and get wordify value
    if (num < 0) {
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
    let result = "";
    const yekan = [" یک ", " دو ", " سه ", " چهار ", " پنج ", " شش ", " هفت ", " هشت ", " نه "],
        dahgan = [" بیست ", " سی ", " چهل ", " پنجاه ", " شصت ", " هفتاد ", " هشتاد ", " نود "],
        sadgan = [" یکصد ", " دویست ", " سیصد ", " چهارصد ", " پانصد ", " ششصد ", " هفتصد ", " هشتصد ", " نهصد "],
        dah = [" ده ", " یازده ", " دوازده ", " سیزده ", " چهارده ", " پانزده ", " شانزده ", " هفده ", " هیجده ", " نوزده "];
    if (level > 0) {
        result += "و";
        level -= 1;
    }

    if (num < 10) {
        result += yekan[num - 1];
    } else if (num < 20) {
        result += dah[num - 10];
    } else if (num < 100) {
        result += dahgan[Math.floor(num / 10) - 2] + wordifyfa(num % 10, level + 1);
    } else if (num < 1000) {
        result += sadgan[Math.floor(num / 100) - 1] + wordifyfa(num % 100, level + 1);
    } else if (num < 1000000) {
        result += wordifyfa(Math.floor(num / 1000), level) + " هزار " + wordifyfa(num % 1000, level + 1);
    } else if (num < 1000000000) {
        result += wordifyfa(Math.floor(num / 1000000), level) + " میلیون " + wordifyfa(num % 1000000, level + 1);
    } else if (num < 1000000000000) {
        result += wordifyfa(Math.floor(num / 1000000000), level) + " میلیارد " + wordifyfa(num % 1000000000, level + 1);
    } else if (num < 1000000000000000) {
        result += wordifyfa(Math.floor(num / 1000000000000), level) + " تریلیارد " + wordifyfa(num % 1000000000000, level + 1);
    }

    return result.trim();
}

export function wordifyRials(num:string|number):string {
    if (num === null || num === undefined || num === "") {
        return "";
    }
    return wordifyfa(num, 0) + " ریال";
}

export function wordifyRialsInTomans(num:string|number):string {
    if(num === null || num === undefined || num === "") {
        return "";
    }
    if(typeof num == "string") {
        var cleanNumber = toEnglishDigits(num);
        num=parseInt(cleanNumber);
    }
    
    if (num >= 10 || num<=-10) {
        num = Math.floor(num / 10);
    } else {
        num = 0;
    }
    return wordifyfa(num, 0) + " تومان";
}

declare var define: any;
declare var module: any;

(function() {
    //expose it through Window
    if (typeof window !== "undefined") {
        //exportables.forEach(exp => (window as any)[nameof(exp)] = exp);
        (window as any)["wordifyfa"] = wordifyfa;
        (window as any)["wordifyRials"] = wordifyRials;
        (window as any)["wordifyRialsInTomans"] = wordifyRialsInTomans;
    }    
    // Node: Export function
    else if (typeof module !== "undefined" && module.exports) {
        module.exports["wordifyfa"] = wordifyfa;
        module.exports["wordifyRials"] = wordifyRials;
        module.exports["wordifyRialsInTomans"] = wordifyRialsInTomans;
    }
    // AMD/requirejs: Define the module
    else if (typeof define === 'function' && define.amd) {
        define(() => wordifyfa);
        define(() => wordifyRials);
        define(() => wordifyRialsInTomans);
    }
}())