/*
* A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits.

 For example, take 153 (3 digits):

 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
 and 1634 (4 digits):

 1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634
 The Challenge:

 Your code must return true or false depending upon whether the given number is a Narcissistic number.

 Error checking for text strings or other invalid inputs is not required, only valid integers will be passed into the function.
* */

function narcissistic( value ) {
    'use strict';
    var pie = value.toString().split('');
    var amount = [];
    var result = 0;
    for(var i = 0, len = pie.length; i<len; i++) {
        amount.push(Math.pow(pie[i], pie.length));
        result += amount[i];
    }

    return(result === value) ? true:false;

}

narcissistic(371);


//alternative

/*
 * function narcissistic( value ) {
 return ('' + value).split('').reduce(function(p, c){
 return p + Math.pow(c, ('' + value).length)
 }, 0) == value;
 }
 *
 * */