/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_RESULT__;function wordifyfa(num, level) {
    if (level === void 0) { level = 0; }
    function toEnglishDigits(num) {
        if (typeof num !== 'string')
            return num;
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
        return parseInt(output.replace(/,/g, ""));
    }
    if (num === null) {
        return "";
    }
    num = toEnglishDigits(num);
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
    var yekan = [" یک ", " دو ", " سه ", " چهار ", " پنج ", " شش ", " هفت ", " هشت ", " نه "], dahgan = [" بیست ", " سی ", " چهل ", " پنجاه ", " شصت ", " هفتاد ", " هشتاد ", " نود "], sadgan = [" یکصد ", " دویست ", " سیصد ", " چهارصد ", " پانصد ", " ششصد ", " هفتصد ", " هشتصد ", " نهصد "], dah = [" ده ", " یازده ", " دوازده ", " سیزده ", " چهارده ", " پانزده ", " شانزده ", " هفده ", " هیجده ", " نوزده "];
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
        result += wordifyfa(Math.floor(num / 1000), level) + " هزار " + wordifyfa(num % 1000, level + 1);
    }
    else if (num < 1000000000) {
        result += wordifyfa(Math.floor(num / 1000000), level) + " میلیون " + wordifyfa(num % 1000000, level + 1);
    }
    else if (num < 1000000000000) {
        result += wordifyfa(Math.floor(num / 1000000000), level) + " میلیارد " + wordifyfa(num % 1000000000, level + 1);
    }
    else if (num < 1000000000000000) {
        result += wordifyfa(Math.floor(num / 1000000000000), level) + " تریلیارد " + wordifyfa(num % 1000000000000, level + 1);
    }
    return result;
}
function wordifyRials(num) {
    return wordifyfa(num, 0) + " ریال";
}
function wordifyRialsInTomans(num) {
    if (typeof num == "string") {
        num = parseInt(num);
    }
    if (num >= 10 || num <= -10) {
        num = Math.floor(num / 10);
    }
    else {
        num = 0;
    }
    return wordifyfa(num, 0) + " تومان";
}
(function () {
    if (window) {
        window["wordifyfa"] = wordifyfa;
        window["wordifyRials"] = wordifyRials;
        window["wordifyRialsInTomans"] = wordifyRialsInTomans;
    }
    else if (typeof module !== "undefined" && module.exports) {
        module.exports["wordifyfa"] = wordifyfa;
        module.exports["wordifyRials"] = wordifyRials;
        module.exports["wordifyRialsInTomans"] = wordifyRialsInTomans;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () { return wordifyfa; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () { return wordifyRials; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () { return wordifyRialsInTomans; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
}());


/***/ })
/******/ ]);
//# sourceMappingURL=wordifyfa.js.map