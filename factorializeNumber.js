function factorialize(num) {
    'use strict';
    var a=1;
    for(var i=1; i<= num; i++){
        a *=i;
    }
    return a;
}

factorialize(5);