function smallestCommons(arr) {
    'use strict';
    var min = Math.min(arr[0], arr[1]);
    var max = Math.max(arr[0], arr[1]);
    var common = min;

    function gcd(a,b) {

        if(!b) {

            return a;

        } else {

            return gcd(b, a % b);

    }

    }
    //reference: https://en.wikipedia.org/wiki/Greatest_common_divisor#Using_Euclid.27s_algorithm
    //loops through the array and sends each number to the gcd function to get a value...common = a; min = b in gcd(a,b) = a*b/lcm(a,b)
    while(min <=max) {
        common = (common * min) / gcd(common, min);
        min++;
    }


    return common;
}


smallestCommons([1, 13]);
