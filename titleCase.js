function titleCase(title, minorWords) {
    'use strict';
    var capitals = function capitals(word){
        var x = word.toLowerCase().split(' ');
        var y = [];
        //console.log(x);
        x.forEach(function(g) {
            y.push(g.substr(0,1).toUpperCase() + g.substr(1).toLowerCase());
        });
        return y;
    };
    if(title && minorWords){
        var a = title.toLowerCase().split(" ");
        var b = minorWords.toLowerCase().split(' ');

        for(var i= 1, len = a.length; i<len; i++) {
            if(b.indexOf(a[i]) > -1) {
                a[i] = a[i].toLowerCase();
            } else if(b.indexOf(a[i]) === -1){
                a[i] = a[i].substr(0,1).toUpperCase() + a[i].substr(1).toLowerCase();
            }
        }

        a[0] = a[0].substr(0,1).toUpperCase() + a[0].substr(1).toLowerCase();

        return a.join(' ');
    } else if(title) {
        var z = capitals(title)
        return z.join(' ');
    } else {
        return '';
    }
}

titleCase('the quick brown fox');