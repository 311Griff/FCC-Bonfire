'use strict';
//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(firstName, prop){
// Only change code below this line
    var isName = false;
    var isGroup = false;

    for (var i=0, length = contacts.length; i < length; i++) {

        if(firstName === contacts[i].firstName) {

            isName=true;
            isGroup = (contacts[i][prop]) ? contacts[i][prop] : false;

        }
    }

    if(!isName) {
        return "No such contact";
    }

    return(isGroup) ? isGroup[1] : "No such property";





// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "number");

