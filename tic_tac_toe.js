//user can select which token X or O

'use strict';
var marker = document.getElementById('marker-select');
var usrMarker;
var cmpMarker;
//set the board boundaries (array?, objects?)
var board = document.querySelectorAll('.box');
var usrArr = [], cmpArr = [];

marker.addEventListener('change', function(e) {
    e.stopPropagation();
    if(marker.value === 'no') {
       this.innerHTML = "Please Select One!"
   }
    usrMarker = marker.value;

    if(usrMarker == 'x') {
        cmpMarker = 'o';
    } else {
        cmpMarker = 'x';
    }
});

var checkWinner = function checkWinner(arr) {
    var win = this.innerHTML = "win!";
    switch (arr) {
        case [0, 1, 2]:
            return win;
            break;
        case [3, 4, 5]:
            return win;
            break;
        case [6, 7, 8]:
            return win;
            break;
        case [2, 4, 6]:
            return win;
            break;
        case [0, 4, 8]:
            return win;
            break;
        default:
            return false;

    }
};

//user goes...
board.forEach(function(aBox) {
    var win = checkWinner(usrArr);
    if(!win) {
       aBox.addEventListener('click', function (e) {
           e.stopPropagation();
           if (usrMarker === 'no') {
               this.innerHTML = "Please select a marker";
           } else {
               this.innerHTML = usrMarker;
           }
           usrArr.push(this.getAttribute('data-value'));
           this.setAttribute('name', 'used');
           computerMove(usrArr);
       });
   } else {

        //done!
    }

});


//computer Go...
function computerMove(arr) {
    console.log(arr);
};


/*Tl, Tm, Tr
 Ml, Mm, Mr
 Bl, Bm, Br*/

//user goes first, then computer, then user....



//selection made - user

//computer selection open

//computer makes selection

//user selection open
