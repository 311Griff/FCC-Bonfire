function reverseString(str) {
    'use strict';

    var a =[];
    a = str.split("");
    a.reverse();
    str = a.join("");
    return str;
}

reverseString("hello");