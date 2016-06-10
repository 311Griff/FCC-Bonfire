function rot13(str) {
    'use strict';
    var a = [];
    var b;
    for(var i = 0, length = str.length; i<length; i++) {
        if(str.charCodeAt(i)< 65 || str.charCodeAt(i) > 90) { //check for non-alphabet related characters from the utf-16 basis.
            a.push(str.charAt(i));
        } else if(str.charCodeAt(i) > 77) { //check for the last half of th alphabet where we reduce the character by 13
            a.push(String.fromCharCode(str.charCodeAt(i)-13));
        } else {
            a.push(String.fromCharCode(str.charCodeAt(i)+13)); //push front end of alphabet where we add 13 characters to keep it in the alphabet
        }
    }
    b = a.join('');

    return b;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");