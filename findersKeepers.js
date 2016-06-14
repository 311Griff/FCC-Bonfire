//takes an array and function then returns the first value that meets the function conditions
function findElement(arr, func) {
 'use strict';
  var num = arr.filter(function(val) {
        if(func(val) === true){
            return val;
        }
    });



    return num[0];
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
