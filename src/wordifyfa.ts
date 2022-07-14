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

    let num:number = parseInt(toEnglishDigits(input));
    

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
    const yekan = ["یک", "دو", "سه", "چهار", "پنج", "شش", "هفت", "هشت", "نه"],
        dahgan = ["بیست", "سی", "چهل", "پنجاه", "شصت", "هفتاد", "هشتاد", "نود"],
        sadgan = ["یکصد", "دویست", "سیصد", "چهارصد", "پانصد", "ششصد", "هفتصد", "هشتصد", "نهصد"],
        dah = ["ده", "یازده", "دوازده", "سیزده", "چهارده", "پانزده", "شانزده", "هفده", "هیجده", "نوزده"];

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
        result += wordifyfa(Math.floor(num / 1000), level) + " هزار" + wordifyfa(num % 1000, level + 1);
    } else if (num < 1000000000) {
        result += wordifyfa(Math.floor(num / 1000000), level) + " میلیون" + wordifyfa(num % 1000000, level + 1);
    } else if (num < 1000000000000) {
        result += wordifyfa(Math.floor(num / 1000000000), level) + " میلیارد" + wordifyfa(num % 1000000000, level + 1);
    } else if (num < 1000000000000000) {
        result += wordifyfa(Math.floor(num / 1000000000000), level) + " تریلیارد" + wordifyfa(num % 1000000000000, level + 1);
    }

    return result;
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
export function momentApprox(date:Date|string|null, baseDate?:Date|string|null, suffixBefore:string="پیش", suffixAfter:string="بعد"):string {
    return wordifyMomentApprox(date, baseDate, suffixBefore, suffixAfter, false);
}
export function wordifyMomentApprox(date:Date|string|null, baseDate?:Date|string|null, suffixBefore:string="پیش", suffixAfter:string="بعد", doWordify:boolean=true):string {
    if(date === null || date === undefined || date === "") {
        return "";
    }
    if (baseDate==null || baseDate==undefined || baseDate=="") {
        baseDate = new Date();
    }
    if(typeof date == "string") {
        date = new Date(date);
    }
    if(typeof baseDate == "string") {
        baseDate = new Date(baseDate);
    }
    let suffix = suffixBefore;
    let diff = Math.floor((baseDate.getTime() - date.getTime())/1000) * 1000;
    if (diff<0) {
        suffix = suffixAfter;
        diff = Math.abs(diff);
    }
    let diffYears = Math.floor(diff / 31557600000);
    if(diffYears>0) {
        return (doWordify ? wordifyfa(diffYears) : diffYears) + " سال " + suffix;
    }
    let diffMonths = Math.floor(diff / 2629800000);
    if(diffMonths>0) {
        return (doWordify ? wordifyfa(diffMonths):diffMonths) + " ماه " + suffix;
    }
    let diffWeeks = Math.floor(diff / 604800000);
    if(diffWeeks>0) {
        return (doWordify?wordifyfa(diffWeeks):diffWeeks) + " هفته " + suffix;
    }
    let diffDays = Math.floor(diff / 86400000);
    if(diffDays>0) {
        return (doWordify?wordifyfa(diffDays):diffDays) + " روز " + suffix;
    }
    let diffHours = Math.floor(diff / 3600000);
    if(diffHours>0) {
        return (doWordify?wordifyfa(diffHours):diffHours) + " ساعت " + suffix;
    }

    let diffMinutes = Math.floor(diff / 60000);
    if(diffMinutes>0) {
        return (doWordify?wordifyfa(diffMinutes):diffMinutes) + " دقیقه " + suffix;
    }

    let diffSeconds = Math.floor(diff / 1000);

    if (diffSeconds > 0) {
        return "چند لحظه " + suffix;
    }    
    return "بلافاصله";

}

export function momentPrecise(date:Date|string|null, baseDate?:Date|string|null, suffixBefore:string="پیش", suffixAfter:string="بعد"):string {
    return wordifyMomentPrecise(date, baseDate, suffixBefore, suffixAfter, false);
}

export function wordifyMomentPrecise(date:Date|string|null, baseDate?:Date|string|null, suffixBefore:string="پیش", suffixAfter:string="بعد", doWordify:boolean=true):string {
    if(date === null || date === undefined || date === "") {
        return "";
    }
    if (baseDate==null || baseDate==undefined || baseDate=="") {
        baseDate = new Date();
    }
    if(typeof date == "string") {
        date = new Date(date);
    }
    if(typeof baseDate == "string") {
        baseDate = new Date(baseDate);
    }

    let suffix = suffixBefore;
    let diff = Math.floor((baseDate.getTime() - date.getTime())/1000) * 1000;
    if (diff<0) {
        suffix = suffixAfter;
        diff = Math.abs(diff);
    }

    let result = "";
    let diffYears = Math.floor(diff / 31557600000);
    if (diffYears>0) {
        diff -= (diffYears * 31557600000);
    }
    let diffMonths = Math.floor(diff / 2629800000);
    if (diffMonths>0) {
        diff -= (diffMonths * 2629800000);
    }
    let diffWeeks = Math.floor(diff / 604800000);
    if (diffWeeks>0) {
        diff -= (diffWeeks * 604800000);
    }
    let diffDays = Math.floor(diff / 86400000);
    if (diffDays>0) {
        diff -= (diffDays * 86400000);
    }
    let diffHours = Math.floor(diff / 3600000);
    if (diffHours>0) {
        diff -= (diffHours * 3600000);
    }

    let diffMinutes = Math.floor(diff / 60000);
    if (diffMinutes>0) {
        diff -= (diffMinutes * 60000);
    }

    let diffSeconds = Math.floor(diff / 1000);

    if (diffYears > 0) {
        result = (doWordify?wordifyfa(diffYears):diffYears) + " سال ";
    }

    if (diffMonths > 0) {
        if(result.length>0) { 
            result+="و "; 
        }
        result += (doWordify?wordifyfa(diffMonths):diffMinutes) + " ماه ";
    }

    if (diffWeeks > 0) {
        if(result.length>0) { result+="و "; }
        result += (doWordify?wordifyfa(diffWeeks):diffWeeks) + " هفته ";
    }

    if (diffDays > 0) {
        if(result.length>0) { result+="و "; }
        result += (doWordify?wordifyfa(diffDays):diffDays) + " روز ";
    }    

    if (diffHours > 0) {
        if(result.length>0) { result+="و "; }
        result += (doWordify?wordifyfa(diffHours):diffHours) + " ساعت ";
    }    

    if (diffMinutes > 0) {
        if(result.length>0) { result+="و "; }
        result += (doWordify?wordifyfa(diffMinutes):diffMinutes) + " دقیقه ";
    }    

    if (diffSeconds > 0) {
        if (result.length>0) { result+="و "; }
        result +=(doWordify? wordifyfa(diffSeconds):diffSeconds) + " ثانیه ";
    }    
    if (result.length==0) {
        return "بلافاصله";
    }
    result +=suffix;
    return result;
}

declare var define: any;
declare var module: any;

(function() {
    //expose it through Window
    if (typeof window !== "undefined") {
        (window as any)["wordifyfa"] = wordifyfa;
        (window as any)["wordifyRials"] = wordifyRials;
        (window as any)["wordifyRialsInTomans"] = wordifyRialsInTomans;
        (window as any)["wordifyMomentApprox"] = wordifyMomentApprox;
        (window as any)["momentApprox"] = momentApprox;

    }    
    // Node: Export function
    else if (typeof module !== "undefined" && module.exports) {
        module.exports["wordifyfa"] = wordifyfa;
        module.exports["wordifyRials"] = wordifyRials;
        module.exports["wordifyRialsInTomans"] = wordifyRialsInTomans;
        module.exports["wordifyMomentApprox"] = wordifyMomentApprox;
        module.exports["momentApprox"] = momentApprox;

    }
    // AMD/requirejs: Define the module
    else if (typeof define === 'function' && define.amd) {
        define(() => wordifyfa);
        define(() => wordifyRials);
        define(() => wordifyRialsInTomans);
        define(() => wordifyMomentApprox);
        define(() => momentApprox);

    }
}())