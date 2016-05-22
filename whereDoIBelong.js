
function getIndexToIns(arr, num) {
    var indexNum;
    arr.sort(function(a,b) { //sort the array
        return a - b;
    });

    for(var i=0, length = arr.length; i<length; i++){ //set the new variable to be the index number of the array if it is larger than or equal to the array value.
        if (num > arr[i]) {
            indexNum = i + 1;
        } else if(num === arr[i]) {
            indexNum = i;
        }
    }

    return indexNum;
}

getIndexToIns([40, 60], 50);