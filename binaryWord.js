//this function converts binary values to an english sentence
function binaryAgent(str) {
    'use strict';
    var newStr = str.split(' ');
    var number = newStr.map(function(val) {
        return parseInt(val, 2);
    });
    var chars = number.map(function(val) {
        return String.fromCharCode(val);
    });
    str = chars.join('');

    return str;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
