
function chunkArrayInGroups(arr, size) {
    var a = [],
        b = 0,
        c = arr.length;

    while (b < c) {
        a.push(arr.slice(b, b += size));//iterates the array by the size, until the array is shorter than the size, while pushing the slices to the end of the array.
    }

    return a;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
