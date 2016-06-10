//this function takes two array arguments and returns the values that are unique in each array.
function diffArray(arr1, arr2) {
'use strict';
    var both = arr1.concat(arr2);
    return both.filter(function (val) {
        if (arr2.indexOf(val) === -1 || arr1.indexOf(val) === -1) {
            return val;
        }
    });
}


diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);