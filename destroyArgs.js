function destroyer(arr) {
    var a = Array.prototype.slice.call(arguments, 1); //sets the arguments into their own array
    function destroyMe(val) {
        return a.indexOf(val) === -1; //checks to see if array arguments are included in the separate args or not

    }

    return arguments[0].filter(destroyMe); //filters the array values against the arguments.
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);