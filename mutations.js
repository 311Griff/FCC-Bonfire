'use strict';
//this verifies if all the letters in the second value of an array are contained in the first value
function mutation(arr) {

    var a = arr[1].toLowerCase().split('');
    var c = true;
    for(var i= 0, length = a.length; i<length; i++) {
        if(arr[0].toLowerCase().indexOf(a[i], 0) == -1) {
            c=false;
        }
    }
    return(c) ? true : false;
}

mutation(["hello", "hey"]);