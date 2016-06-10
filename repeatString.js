
function repeatStringNumTimes(str, num) {
    'use strict';
    var a;
    if(num > 0) {
        a = str.repeat(num);
        return a;
    } else {
        return "";
    }


}

repeatStringNumTimes("abc", 3);
