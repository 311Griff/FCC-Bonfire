
function truncateString(str, num) {
    'use strict';

    var a=str.length;
    var b = num-3;
    var c;

    if(num >= a) {
        c = str;
    } else if (b > 0) {
        c = str.slice(0, b)+ '...';
    } else {
        c=str.slice(0,num) + '...';
    }
    return c;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
