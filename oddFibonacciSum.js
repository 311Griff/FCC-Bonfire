//takes a number and adds the odd fibonacci(fib) numbers below or equal to it.
function sumFibs(num) {
    var fib = [], oddFib=[];
    var theNum=0;

    //get fib numbers into an array
    var a = 0, b = 1, f = 1;
    for(var i = 2; i <= 50; i++) {
        f = a + b;
        a = b;
        b = f;
        fib.push(b);
    }
    //add the original 1 to the beginning of fib numbers
    fib.splice(0,0,1);

    //get odd fib numbers
    for(var j = 0, length = fib.length; j<length; j++) {
        if(fib[j] % 2 !== 0) {
            oddFib.push(fib[j]);
        }
    }
    //add the odd ones lower than the num passed to the original function
    oddFib.map(function(val) {
        if(val<=num) {
            return theNum += val;
        }
    });

    return theNum;
}

sumFibs(4);
