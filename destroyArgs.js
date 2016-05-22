function destroyer(arr) {
    var a = Array.prototype.slice.call(arguments, 1);
    function destroyMe(val) {
        return a.indexOf(val) === -1;

    }

    return arguments[0].filter(destroyMe);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);