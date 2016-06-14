//takes an array and function to match it, then returns the array section of the first occurance of true against the function

function dropElements(arr, func) {

    var drop = arr.findIndex(func);

    if(drop > -1){
        arr = arr.slice(drop);
    } else {
        arr = [];
    }

    return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
