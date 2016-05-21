
function largestOfFour(arr) {
    var maxArray = [];
    for(var i = 0, length = arr.length; i < length; i++) {
        var a = 0;
        for(var j = 0, all = arr[i].length; j < all; j++) {
            if(arr[i][j] > a) {
                a = arr[i][j];
            }
        }
        maxArray.push(a);
    }

    return maxArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
