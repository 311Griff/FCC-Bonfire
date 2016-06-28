//fundamental object linked-list to array in js
'use strict';
function listToArray(list) {

    var arr = [];
    var x;

    while(list !== null) {
        x=list.value;
        arr.push(x);
        list = list.next;
    }

}

var list1 = {value: 1, next: {value: 2, next: {value: 3, next: null}}};
var list2 = {value: "foo", next: {value: "bar", next: null}};

listToArray(list1);
listToArray(list2);

//alternate.... shorter:

/*
*
 function listToArray(list) {
 var arr = [];

 while(list) {
 arr.push(list.value);
 list = list.next;
 }

 return arr;
 }
*
*
* */