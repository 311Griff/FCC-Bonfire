//user can select which token X or O

'use strict';
var marker = document.getElementById('marker-select');
var usrMarker;
var cmpMarker;
//set the board boundaries (array?, objects?)
var board = document.querySelectorAll('.box');
var usrArr = [],
    cmpArr = [];

marker.addEventListener('change', function(e) {
    e.stopPropagation();
    usrMarker = marker.value;
    if (usrMarker == 'X') {
        cmpMarker = 'O';
        marker.parentElement.setAttribute('class', 'close');
    } else {
        cmpMarker = 'X';
        marker.parentElement.setAttribute('class', 'close');
    }
});

var checkWinner = function checkWinner(arr) {
    switch (true) {
        case arr.indexOf('0')> -1 && arr.indexOf('1') > -1 && arr.indexOf('2') >-1:
            return 'top row';
            break;
        case arr.indexOf('3')> -1 && arr.indexOf('4') > -1 && arr.indexOf('5') >-1:
            return 'middle row';
            break;
        case arr.indexOf('6')> -1 && arr.indexOf('7') > -1 && arr.indexOf('8') >-1:
            return 'bottom row';
            break;
        case arr.indexOf('2')> -1 && arr.indexOf('4') > -1 && arr.indexOf('6') >-1:
            return 'diagonal top right to bottom left';
            break;
        case arr.indexOf('0')> -1 && arr.indexOf('4') > -1 && arr.indexOf('8') >-1:
            return 'diagonal top left to bottom right';
            break;
        case arr.indexOf('2')> -1 && arr.indexOf('5') > -1 && arr.indexOf('8') >-1:
            return 'right column';
            break;
        case arr.indexOf('1')> -1 && arr.indexOf('4') > -1 && arr.indexOf('7') >-1:
            return 'middle column';
            break;
        case arr.indexOf('0')> -1 && arr.indexOf('3') > -1 && arr.indexOf('6') >-1:
            return 'left column';
            break;
        default:
            return;

    }

};

//user's play...
board.forEach(function(aBox) {
    var eventList = ["touchstart", "click"];
    for(event of eventList) {
        aBox.addEventListener(event, function(e) {
            e.stopPropagation();
            if (this.getAttribute('name')!== 'used'){
                this.innerHTML = usrMarker;
                usrArr.push(this.getAttribute('data-value'));
                usrArr.sort();
                this.setAttribute('name', 'used');
            } else {
                //do nothing
            }
            //check for a winner
            var win = checkWinner(usrArr);
            if (win !== undefined) {
                alert("winner! " + usrMarker +" "+  win);
                location.reload();
            } else {
                computerMove();
            }
        });
    }

});

//computer Go...
function computerMove() {
    var canUse = document.getElementsByName('notused');
    console.log(canUse);
    var random = Math.floor(Math.random() * (canUse.length - 0) + 0);
    var play = canUse[random];
    play.innerHTML = cmpMarker;
    play.setAttribute('name', 'used');
    cmpArr.push(play.getAttribute('data-value'));
    //check for a winner
    var win = checkWinner(cmpArr);
    if (win !== undefined) {
        alert("winner! " + cmpMarker +" "+  win);
        location.reload();
    }

};
