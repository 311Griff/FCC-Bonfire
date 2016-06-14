//function uses recursion to flatten a multi-nested array...
function steamrollArray(arr) {
'use strict';

    //the better way is with recursion....

    var newArr = [];

    flatten(arr);   // We call the flatten function once on the input array.

    function flatten(array) {
        array.forEach(function(item) { //forEach to take the array through and check for arrays
            if (!Array.isArray(item)) {
                newArr.push(item);
            } else {
                flatten(item);        // here's the recursion call, until the values are no long in an array
            }
        });
    }

    return newArr;
}

steamrollArray([1, [2], [3, [[4]]]]);
