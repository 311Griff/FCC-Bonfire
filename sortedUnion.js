//this function will take an array of array, etc, and find the unique characters and combine them into a new array
function uniteUnique(arr) {
    'use strict';

    var args = Array.prototype.slice.call(arguments);
    var first = args[0];
    var arrays = [];
    var bigArray;

    args.reduce(function(pv, cv) {
        return cv.map(function(val){

            if(first.indexOf(val) === -1) {
                arrays.push(val);
            }
        });
    });

    bigArray = first.concat(arrays);

    return bigArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
