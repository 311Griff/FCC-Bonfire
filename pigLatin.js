
function translatePigLatin(str) {
/*
**   variables to create array with string,
**   check for vowels, get the index of first vowel,
**   set what to push onto the end the array
*/
    var newStr = str.split('');
    var vowL = str.match(/[aeiouAEIOU]/);
    var vowIndex = vowL.index;
    var pusher = str.substr(0,vowIndex);

    //test for first letter vowel, add way if so, otherwise, push up to the first vowel in the word to the end with 'ay'
    if(vowIndex === 0) {
        newStr.push('way');
        newStr.splice(0,vowIndex);
    }else {
        newStr.push(pusher + 'ay');
        newStr.splice(0,vowIndex);
    }

    return newStr.join('');


}
translatePigLatin("consonant");
