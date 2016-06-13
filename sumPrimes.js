//sums all prime numbers including passed value if it's also prime
function sumPrimes(num) {
    var primes = [];

    for (var i = 0; i <= num; i++) {
        var notPrimeNum = false;

        //find all the numbers that are prime and less than the argument passed to the original function
        for (var j = 2; j <= i; j++) {
            if (i%j=== 0 && j!==i) {
                notPrimeNum = true;
            }
        }
        //create an array of prime numbers
        if (notPrimeNum === false && i > 1) {
            primes.push(i);
        }
    }
//reduce the prime number array and add each number
    num = primes.reduce(function(a,b) {
        return a + b;
    });

    return num;
}

sumPrimes(10);
