
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
    var name = false;
    var group = false;

    for (var i=0, length = contacts.length; i < length; i++) {
        if(firstName === contacts[i].firstName) {
            name=true;
            group = (contacts[i][prop]) ? contacts[i][prop] : false;
        }
    }

    if(!name) {
        return "No such contact";
    }

    return(group) ? group : "No such property";





// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "address");
