//this function below will receive two numbers in an array and sum all numbers between them including themselves

function sumAll(arr) {
    'use strict';

    var max = Math.max(arr[0],arr[1]);
    var min = Math.min(arr[0],arr[1]);
    var newNum = [];
    for(var i =min+1; i<max; i++) {
        newNum.push(i);

    }
    var newArr = arr.concat(newNum);
    var a = newArr.reduce(function(pv, nv, index, newArr) {
        return pv + nv;
    });


    return a;
}

sumAll([1, 4]);