//this function takes in an array of objects and filters out the bad matches and sets a truth or false flag on the group within the array.
function truthCheck(collection, pre) {
    'use strict';
    var isTruth = true,
        overallTruth = true;

    for(var i = 0, len=collection.length; i<len; i++) {
        if (collection[i].hasOwnProperty(pre)) {
            if (typeof collection[i][pre] === 'number' && (collection[i][pre] < 1 || isNaN(collection[i][pre]))) {
                isTruth = false;
                return false;
            } else if (typeof collection[i][pre] === 'string' && collection[i][pre] === "" || collection[i][pre] === null || collection[i][pre] === undefined) {
                isTruth = false;
                return false;
            }
        } else {
            isTruth = false;
            return false;
        }
    }
    if(isTruth === false) {
        overallTruth = false;
    }

    return overallTruth;
}
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");


//alternate: this is a cleaner alternative to the above code
/*
function truthCheck(collection, pre) {
    var passed =true;

    Object.keys(collection).forEach(function(index){
       if(collection[index].hasOwnProperty(pre) && collection[index][pre]) {

       } else {
           passed=false;
       }
    });


    return passed;
}*/