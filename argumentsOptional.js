/*
* sums two arguments together.
* If only one argument is provided, then return a function that expects one argument and returns the sum.
* For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
* Calling this returned function with a single argument will then return the sum
*
* */
function addTogether() {
    var args = Array.prototype.slice.call(arguments);
    //clean the args to be numbers only...
    if (args.length === 1 && typeof args[0] === 'number') {
         var x = args[0];    //closure function variable
        return function(y) {
            if (typeof y === 'number') {
                return x + y;
            }
        };
    } else if (typeof args[0] === 'number' && typeof args[1] === 'number') {
        return args[0] + args[1];
    }
}

console.log(addTogether(2), addTogether(3));
addTogether("http://bit.ly/IqT6zt");