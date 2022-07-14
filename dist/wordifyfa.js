/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 171:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: momentApprox, momentPrecise, wordifyMomentApprox, wordifyMomentPrecise, wordifyRials, wordifyRialsInTomans, wordifyfa

;// CONCATENATED MODULE: ./src/toEnglishDigits.ts
function toEnglishDigits(num) {
    if (num === null || num === undefined) {
        return null;
    }
    if (typeof num !== 'string' || num.length === 0)
        return num.toString();
    var faDigits = '۰۱۲۳۴۵۶۷۸۹';
    var arDigits = '٠١٢٣٤٥٦٧٨٩';
    var output = "";
    for (var ipos = 0; ipos < num.length; ipos++) {
        var faIndex = faDigits.indexOf(num[ipos]);
        if (faIndex >= 0) {
            output += faIndex.toString();
            continue;
        }
        var arIndex = arDigits.indexOf(num[ipos]);
        if (arIndex >= 0) {
            output += arIndex.toString();
            continue;
        }
        output += num[ipos];
    }
    return output.replace(/,/g, "");
}

;// CONCATENATED MODULE: ./src/wordifyfa.ts
/* module decorator */ module = __webpack_require__.hmd(module);

function wordifyfa(input, level) {
    if (level === void 0) { level = 0; }
    if (input === null) {
        return "";
    }
    var num = parseInt(toEnglishDigits(input));
    if (num < 0) {
        num = num * -1;
        return "منفی " + wordifyfa(num, level);
    }
    if (num === 0) {
        if (level === 0) {
            return "صفر";
        }
        else {
            return "";
        }
    }
    var result = "";
    var yekan = ["یک", "دو", "سه", "چهار", "پنج", "شش", "هفت", "هشت", "نه"], dahgan = ["بیست", "سی", "چهل", "پنجاه", "شصت", "هفتاد", "هشتاد", "نود"], sadgan = ["یکصد", "دویست", "سیصد", "چهارصد", "پانصد", "ششصد", "هفتصد", "هشتصد", "نهصد"], dah = ["ده", "یازده", "دوازده", "سیزده", "چهارده", "پانزده", "شانزده", "هفده", "هیجده", "نوزده"];
    if (level > 0) {
        result += " و ";
        level -= 1;
    }
    if (num < 10) {
        result += yekan[num - 1];
    }
    else if (num < 20) {
        result += dah[num - 10];
    }
    else if (num < 100) {
        result += dahgan[Math.floor(num / 10) - 2] + wordifyfa(num % 10, level + 1);
    }
    else if (num < 1000) {
        result += sadgan[Math.floor(num / 100) - 1] + wordifyfa(num % 100, level + 1);
    }
    else if (num < 1000000) {
        result += wordifyfa(Math.floor(num / 1000), level) + " هزار" + wordifyfa(num % 1000, level + 1);
    }
    else if (num < 1000000000) {
        result += wordifyfa(Math.floor(num / 1000000), level) + " میلیون" + wordifyfa(num % 1000000, level + 1);
    }
    else if (num < 1000000000000) {
        result += wordifyfa(Math.floor(num / 1000000000), level) + " میلیارد" + wordifyfa(num % 1000000000, level + 1);
    }
    else if (num < 1000000000000000) {
        result += wordifyfa(Math.floor(num / 1000000000000), level) + " تریلیارد" + wordifyfa(num % 1000000000000, level + 1);
    }
    return result;
}
function wordifyRials(num) {
    if (num === null || num === undefined || num === "") {
        return "";
    }
    return wordifyfa(num, 0) + " ریال";
}
function wordifyRialsInTomans(num) {
    if (num === null || num === undefined || num === "") {
        return "";
    }
    if (typeof num == "string") {
        var cleanNumber = toEnglishDigits(num);
        num = parseInt(cleanNumber);
    }
    if (num >= 10 || num <= -10) {
        num = Math.floor(num / 10);
    }
    else {
        num = 0;
    }
    return wordifyfa(num, 0) + " تومان";
}
function momentApprox(date, baseDate, suffixBefore, suffixAfter) {
    if (suffixBefore === void 0) { suffixBefore = "پیش"; }
    if (suffixAfter === void 0) { suffixAfter = "بعد"; }
    return wordifyMomentApprox(date, baseDate, suffixBefore, suffixAfter, false);
}
function wordifyMomentApprox(date, baseDate, suffixBefore, suffixAfter, doWordify) {
    if (suffixBefore === void 0) { suffixBefore = "پیش"; }
    if (suffixAfter === void 0) { suffixAfter = "بعد"; }
    if (doWordify === void 0) { doWordify = true; }
    if (date === null || date === undefined || date === "") {
        return "";
    }
    if (baseDate == null || baseDate == undefined || baseDate == "") {
        baseDate = new Date();
    }
    if (typeof date == "string") {
        date = new Date(date);
    }
    if (typeof baseDate == "string") {
        baseDate = new Date(baseDate);
    }
    var suffix = suffixBefore;
    var diff = Math.floor((baseDate.getTime() - date.getTime()) / 1000) * 1000;
    if (diff < 0) {
        suffix = suffixAfter;
        diff = Math.abs(diff);
    }
    var diffYears = Math.floor(diff / 31557600000);
    if (diffYears > 0) {
        return (doWordify ? wordifyfa(diffYears) : diffYears) + " سال " + suffix;
    }
    var diffMonths = Math.floor(diff / 2629800000);
    if (diffMonths > 0) {
        return (doWordify ? wordifyfa(diffMonths) : diffMonths) + " ماه " + suffix;
    }
    var diffWeeks = Math.floor(diff / 604800000);
    if (diffWeeks > 0) {
        return (doWordify ? wordifyfa(diffWeeks) : diffWeeks) + " هفته " + suffix;
    }
    var diffDays = Math.floor(diff / 86400000);
    if (diffDays > 0) {
        return (doWordify ? wordifyfa(diffDays) : diffDays) + " روز " + suffix;
    }
    var diffHours = Math.floor(diff / 3600000);
    if (diffHours > 0) {
        return (doWordify ? wordifyfa(diffHours) : diffHours) + " ساعت " + suffix;
    }
    var diffMinutes = Math.floor(diff / 60000);
    if (diffMinutes > 0) {
        return (doWordify ? wordifyfa(diffMinutes) : diffMinutes) + " دقیقه " + suffix;
    }
    var diffSeconds = Math.floor(diff / 1000);
    if (diffSeconds > 0) {
        return "چند لحظه " + suffix;
    }
    return "بلافاصله";
}
function momentPrecise(date, baseDate, suffixBefore, suffixAfter) {
    if (suffixBefore === void 0) { suffixBefore = "پیش"; }
    if (suffixAfter === void 0) { suffixAfter = "بعد"; }
    return wordifyMomentPrecise(date, baseDate, suffixBefore, suffixAfter, false);
}
function wordifyMomentPrecise(date, baseDate, suffixBefore, suffixAfter, doWordify) {
    if (suffixBefore === void 0) { suffixBefore = "پیش"; }
    if (suffixAfter === void 0) { suffixAfter = "بعد"; }
    if (doWordify === void 0) { doWordify = true; }
    if (date === null || date === undefined || date === "") {
        return "";
    }
    if (baseDate == null || baseDate == undefined || baseDate == "") {
        baseDate = new Date();
    }
    if (typeof date == "string") {
        date = new Date(date);
    }
    if (typeof baseDate == "string") {
        baseDate = new Date(baseDate);
    }
    var suffix = suffixBefore;
    var diff = Math.floor((baseDate.getTime() - date.getTime()) / 1000) * 1000;
    if (diff < 0) {
        suffix = suffixAfter;
        diff = Math.abs(diff);
    }
    var result = "";
    var diffYears = Math.floor(diff / 31557600000);
    if (diffYears > 0) {
        diff -= (diffYears * 31557600000);
    }
    var diffMonths = Math.floor(diff / 2629800000);
    if (diffMonths > 0) {
        diff -= (diffMonths * 2629800000);
    }
    var diffWeeks = Math.floor(diff / 604800000);
    if (diffWeeks > 0) {
        diff -= (diffWeeks * 604800000);
    }
    var diffDays = Math.floor(diff / 86400000);
    if (diffDays > 0) {
        diff -= (diffDays * 86400000);
    }
    var diffHours = Math.floor(diff / 3600000);
    if (diffHours > 0) {
        diff -= (diffHours * 3600000);
    }
    var diffMinutes = Math.floor(diff / 60000);
    if (diffMinutes > 0) {
        diff -= (diffMinutes * 60000);
    }
    var diffSeconds = Math.floor(diff / 1000);
    if (diffYears > 0) {
        result = (doWordify ? wordifyfa(diffYears) : diffYears) + " سال ";
    }
    if (diffMonths > 0) {
        if (result.length > 0) {
            result += "و ";
        }
        result += (doWordify ? wordifyfa(diffMonths) : diffMinutes) + " ماه ";
    }
    if (diffWeeks > 0) {
        if (result.length > 0) {
            result += "و ";
        }
        result += (doWordify ? wordifyfa(diffWeeks) : diffWeeks) + " هفته ";
    }
    if (diffDays > 0) {
        if (result.length > 0) {
            result += "و ";
        }
        result += (doWordify ? wordifyfa(diffDays) : diffDays) + " روز ";
    }
    if (diffHours > 0) {
        if (result.length > 0) {
            result += "و ";
        }
        result += (doWordify ? wordifyfa(diffHours) : diffHours) + " ساعت ";
    }
    if (diffMinutes > 0) {
        if (result.length > 0) {
            result += "و ";
        }
        result += (doWordify ? wordifyfa(diffMinutes) : diffMinutes) + " دقیقه ";
    }
    if (diffSeconds > 0) {
        if (result.length > 0) {
            result += "و ";
        }
        result += (doWordify ? wordifyfa(diffSeconds) : diffSeconds) + " ثانیه ";
    }
    if (result.length == 0) {
        return "بلافاصله";
    }
    result += suffix;
    return result;
}
(function () {
    if (typeof window !== "undefined") {
        window["wordifyfa"] = wordifyfa;
        window["wordifyRials"] = wordifyRials;
        window["wordifyRialsInTomans"] = wordifyRialsInTomans;
        window["wordifyMomentApprox"] = wordifyMomentApprox;
        window["momentApprox"] = momentApprox;
    }
    else if ( true && module.exports) {
        module.exports["wordifyfa"] = wordifyfa;
        module.exports["wordifyRials"] = wordifyRials;
        module.exports["wordifyRialsInTomans"] = wordifyRialsInTomans;
        module.exports["wordifyMomentApprox"] = wordifyMomentApprox;
        module.exports["momentApprox"] = momentApprox;
    }
    else if (typeof define === 'function' && __webpack_require__.amdO) {
        define(function () { return wordifyfa; });
        define(function () { return wordifyRials; });
        define(function () { return wordifyRialsInTomans; });
        define(function () { return wordifyMomentApprox; });
        define(function () { return momentApprox; });
    }
}());


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(171);
/******/ 	
/******/ })()
;
//# sourceMappingURL=wordifyfa.js.map