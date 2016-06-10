function myReplace(str, before, after) {
//variables to get the strings into arrays for manipulation
    'use strict';
    var newStr = before.concat(',', after);
    var newAfter = newStr.split(',');
    var wordAfter;
   //testing for character codes to determine capital letter, or not
    if (newAfter[0].charCodeAt(newAfter[0].substring(0, 0)) < 95) {

        wordAfter = newAfter[1].substring(0, 1).toUpperCase() + newAfter[1].substring(1);
    } else {
        wordAfter = newAfter[1];
    }

    var strArr = str.split(" ");
//filter the array with a function that will replace the word with a splice within the main string array
    strArr.filter(function(str, index) {
        if (str.indexOf(before) === 0) {
            var newStr = strArr.splice(index, 1, wordAfter);
            return newStr;
        }
    });
//return the array joined to make a sentence string with spaces.
    return strArr.join(' ');
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");