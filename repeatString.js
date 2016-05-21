
function repeatStringNumTimes(str, num) {
    if(num > 0) {
        a = str.repeat(num);
        return a;
    } else {
        return "";
    }


}

repeatStringNumTimes("abc", 3);
