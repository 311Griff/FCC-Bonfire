function bouncer(arr) {

    function cleanFalse(val) {
        if(Boolean(val) === true) {
            return val;
        }

    }


    return arr.filter(cleanFalse);
}

bouncer([7, "ate", "", false, 9]);
