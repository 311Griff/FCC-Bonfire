//user can select which token X or O

'use strict';
var marker = document.getElementById('marker-select');
var usrMarker;
var cmpMarker;
//set the board boundaries (array?, objects?)
var board = document.querySelectorAll('.box');
var usrArr = [],
    cmpArr = [];

var isMobile = (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Windows Phone/i.test(navigator.userAgent)) ? true : false;

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
        case arr.indexOf('0') > -1 && arr.indexOf('1') > -1 && arr.indexOf('2') > -1:
            return 'top row';
            break;
        case arr.indexOf('3') > -1 && arr.indexOf('4') > -1 && arr.indexOf('5') > -1:
            return 'middle row';
            break;
        case arr.indexOf('6') > -1 && arr.indexOf('7') > -1 && arr.indexOf('8') > -1:
            return 'bottom row';
            break;
        case arr.indexOf('2') > -1 && arr.indexOf('4') > -1 && arr.indexOf('6') > -1:
            return 'diagonal top right to bottom left';
            break;
        case arr.indexOf('0') > -1 && arr.indexOf('4') > -1 && arr.indexOf('8') > -1:
            return 'diagonal top left to bottom right';
            break;
        case arr.indexOf('2') > -1 && arr.indexOf('5') > -1 && arr.indexOf('8') > -1:
            return 'right column';
            break;
        case arr.indexOf('1') > -1 && arr.indexOf('4') > -1 && arr.indexOf('7') > -1:
            return 'middle column';
            break;
        case arr.indexOf('0') > -1 && arr.indexOf('3') > -1 && arr.indexOf('6') > -1:
            return 'left column';
            break;
        default:
            return;

    }

};

//user's play...
board.forEach(function(aBox) {
    if (isMobile) {
        aBox.addEventListener("touchstart", function(e) {
            e.stopPropagation();
            if (this.getAttribute('name') !== 'used') {
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
                alert("User Wins! " + win);
                location.reload();
            } else {
                computerMove();
            }
        });
    } else {
        aBox.addEventListener("click", function(e) {
            e.stopPropagation();
            if (this.getAttribute('name') !== 'used') {
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
                alert("User Wins! " + win);
                setTimeout(function() {
                    window.location.reload(false);
                }, 1000);
            } else {
                computerMove();
            }
        });
    }

});

//computer Go...
function computerMove() {
    var play;
    var canUse = Array.from(document.getElementsByName('notused'));
    console.log(canUse.length);
    var random = Math.floor(Math.random() * (canUse.length - 0) + 0);
    if(canUse.indexOf('middle-mid')>-1) {
        play = document.getElementById('middle-mid');
    } else {
        play = canUse[random];
    }
    if(play !== undefined) {
        play.innerHTML = cmpMarker;
        cmpArr.push(play.getAttribute('data-value'));
    }
    if(canUse.length > 0) {
        play.setAttribute('name', 'used');
    }

    //check for a winner
    var win = checkWinner(cmpArr);
    if (win !== undefined) {
        alert("Computer Wins! " + win);
        setTimeout(function() {
            window.location.reload(false);
        }, 1000);
    } else if (win === undefined && canUse.length < 1) {
        alert("It's a Tie");
        setTimeout(function() {
            window.location.reload(false);
        }, 1000);
    }

}