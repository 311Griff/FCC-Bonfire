//this function takes a string, creates pairs in the string, then returns a larger array of the pair arrays
function pairElement(str) {
    var pairStr = str.split('');
    var bigArr = [];
    var strArr = [];
    var chunk = 2;

//for loop with a switch statement to push letter pairs into the original string array, next to their partner
    for(var i=0, length=pairStr.length; i<length;i++){

        switch(pairStr[i]) {
            case('G'):
                strArr.push(pairStr[i],'C');
                break;
            case('C'):
                strArr.push(pairStr[i],'G');
                break;
            case('A'):
                strArr.push(pairStr[i],'T');
                break;
            case('T'):
                strArr.push(pairStr[i],'A');
                break;
        }
    }
//for loop to slice up the array into pairs and push them into the bigger array wrapper array
    for(var j =0; j<strArr.length; j+=chunk) {
        bigArr.push(strArr.slice(j, j+chunk));

    }


    return bigArr;
}

pairElement("GCG");
