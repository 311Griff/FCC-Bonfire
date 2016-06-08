
//function returns a missing letter within a string of ascii characters in alphabetical order
function fearNotLetter(str) {
    var strArr = str.split('');
    var chars = [];
    var max;
    var min;
    var sum;
    var should = [];
    var shouldSum;
    var missing;

    //get the char codes into an array
    for(var item in strArr) {
        chars.push(str.charCodeAt(item));
    }

    //set the max and min on the character codes
    max = chars[chars.length-1];
    min = chars[0];

    //get the current sum of the codes in the initial param
    sum = chars.reduce(function(a,b){
        return a + b;
    });

    //get what the character codes should be if all letters were there
    for(var i=max; i>=min; i--) {
        should.push(i);
    }

    //get the sum of the character codes if all were there
    shouldSum = should.reduce(function(a, b) {
        return a + b;
    });

    //find the missing character code number by subtracting what's there from what's supposed to be there
    missing = shouldSum - sum;

    //return the letter if missing is more than 0, or undefined if it's 0 - indicating no letters missing from string
    return (missing > 0 ) ?  missing = String.fromCharCode(missing) : undefined;
}

fearNotLetter("abce");