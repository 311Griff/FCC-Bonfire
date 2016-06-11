//adds a hyphen between the words and makes characters lowercase in a sentence passed to it.
function spinalCase(str) {
    var newStr = str.split(/(?=[A-Z])/); //split a string at capital letters
    newStr = newStr.join(' ').replace(/\s+/g,' ').trim(); //join the words and remove any extra spaces in the string
    newStr = newStr.replace(/[_&!@#$%*^()]/g,""); //replaces any extra non-letter chars on the string
    newStr = newStr.replace(/\s/g, "-"); //adds the hyphens
    return newStr.toLowerCase();
}

spinalCase('This Is Spinal Tap');
