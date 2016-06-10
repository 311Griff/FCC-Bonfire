//this function takes a number, and converts it to roman numerals.

function convertToRoman(num) {
    'use strict';

    var digits = num.toString().split(''); //make the number into a string
    var romans = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
        "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
        "","I","II","III","IV","V","VI","VII","VIII","IX"];  //the roman numerals array
    var romanNum = ''; //stores the roman numeral string
    var i = 3; //sets the number of iterations through the while loop


    //while loop attaches the characters from romans to each digit in the digits array
    while (i--) {
        romanNum = (romans[+digits.pop() + (i * 10)] || "") + romanNum;
    }

    return Array(+digits.join("") + 1).join("M") + romanNum; //return the roman numeral as a joined array, but add M if it's over a 1000
}

convertToRoman(36);