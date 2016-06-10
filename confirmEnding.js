
function confirmEnding(str, target) {
    'use strict';
    var a = str.split(' ').length -1;
    var b = str.split(' ')[a];
    return(b.substr(b.length - target.length) === target)?true : false;
}

confirmEnding("Bastian", "n");
