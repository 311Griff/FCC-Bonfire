
function titleCase(str) {
    var a = str.toLowerCase().split(" ");
    var b = [];
    var c;

    for(var i = 0, length = a.length; i<length; i++){
        b[i] = a[i].substr(0,1).toUpperCase() + a[i].substr(1).toLowerCase();
    }

    c = b.join(' ');
    return c;
}

titleCase("I'm a little tea pot");
