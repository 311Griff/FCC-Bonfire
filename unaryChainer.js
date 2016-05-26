function chained(functions) {
    return function(x){
        return functions.reduce(function(prev, curr){
            return curr(prev);
        }, x)
    };
}

function f1(x){ return x*2 }
function f2(x){ return x+2 }
function f3(x){ return Math.pow(x,2) }

chained([f1,f2,f3])(0), 4;