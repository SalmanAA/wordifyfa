// Persian Wordifier
// Version: 1.3.0
// Author: Salman Arab Ameri
// Publish: 2020-05-15
// with use of ideas in http://www.dotnettips.info/post/626/%D8%AA%D8%A8%D8%AF%DB%8C%D9%84-%D8%B9%D8%AF%D8%AF-%D8%A8%D9%87-%D8%AD%D8%B1%D9%88%D9%81

function wordifyfa(num:string|number, level:number=0):string {
    function toEnglishDigits(num:string|number):number {
        if (typeof num !== 'string')
            return num;
        const faDigits = '۰۱۲۳۴۵۶۷۸۹';
        const arDigits = '٠١٢٣٤٥٦٧٨٩';
        let output = "";
        for (let ipos = 0; ipos < num.length; ipos++) {

            let faIndex = faDigits.indexOf(num[ipos]);
            if (faIndex >= 0) {
                output += faIndex.toString();
                continue;
            }
            let arIndex = arDigits.indexOf(num[ipos]);
            if (arIndex >= 0) {
                output += arIndex.toString();
                continue;
            }
            output += num[ipos];
        }
        return parseInt(output.replace(/,/g, ""));
    }

    if (num === null) {
        return "";
    }

    num = toEnglishDigits(num);
    

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
        result += " و ";
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

    return result;
}

function wordifyRials(num:string|number):string {
    return wordifyfa(num, 0) + " ریال";
}

function wordifyRialsInTomans(num:string|number):string {
    if(typeof num == "string") {
        num=parseInt(num);
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
    if (window) {
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