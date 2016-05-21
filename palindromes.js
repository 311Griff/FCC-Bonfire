function palindrome(str) {
    var a = str.replace(/[_\W\s\0]/gi,'');
    var b = a.toLowerCase();
    var c = b.split('').reverse().join('');
    console.log(c);
    return(b === c) ? true:false;
}



palindrome("eye");