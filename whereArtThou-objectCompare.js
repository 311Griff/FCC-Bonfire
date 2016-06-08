
function whereAreYou(collection, source) {

//get the properties from the source object in an array
    var srcProps = Object.keys(source); //an array
//return the filter callback function on each object in collection array of objects
    return collection.filter(function(obj) {
        //reduce the array of keys in source props array
        return srcProps.reduce(function(res, key){
//check each collection object for the property in source, then return the objects that have matches to all values in the reduced source properties
            return obj.hasOwnProperty(key) && obj[key] === source[key];

        },false);//return false
    });

}

whereAreYou([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
