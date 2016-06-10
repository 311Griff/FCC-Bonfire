//function takes string with entities and replaces them
function convertHTML(str) {
    'use strict';
    var strArr = str.split('');
    //map the string array (strArr) and return the char codes
    var chars = strArr.map(function(val){
        return val.charCodeAt();
    });
    //each character code with its corresponding html entity
    var codes = {
        38:'&amp;',
        62:'&gt;',
        60:'&lt;',
        34:'&quot;',
        39:'&apos;'
    };
//loop the char array and pull out the char codes and then transfer them to html entities
    for(var i = 0, length = chars.length; i<length; i++){
        for(var v in codes) {

            if(chars[i] == v){
                chars[i] = codes[v];
            }

        }
    }

    //map the chars array back to the str variable if they are numbers, but leave the html entity strings
    str = chars.map(function(val){
        if(typeof val === "number") {
            return String.fromCharCode(val);
        } else {
            return val;
        }
    });

    //join the string to make the sentence with the html entities intact.
    str = str.join('');

    return str;
}

convertHTML("Dolce & Gabbana");
