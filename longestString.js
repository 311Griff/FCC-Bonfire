'use strict';
function findLongestWord(str) {


    var a = str.split(' ');
    var b=1;
    var c;

    for(var i=0; i<a.length; i++) {
        if(a[i].length>b) {
            b = a[i].length;
            c = b;
            console.log(c);
        }
    }
    return c;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

