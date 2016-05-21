function reverseString(str) {
    var a =[];
    a = str.split("");
    a.reverse();
    str = a.join("");
    return str;
}

reverseString("hello");