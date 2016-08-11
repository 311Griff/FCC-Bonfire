'use strict';
let strictPlay = false;
let simon = [];
let counter = 0;


//start the game button
document.getElementById('start-button').addEventListener('click', function () {
    startGame();
});

//reset the game button
document.getElementById('quit').addEventListener('click', function(){
   clearGame();
});

//sets the variables for the game and starts it
function startGame() {
    simon = [];
    let copy = [];
    counter = 0;
    newRound(copy);
}

//clears the variables for the game and ends the process
function clearGame() {
    simon = [];
    counter = 0;
    document.getElementById('counter').innerHTML = counter;

}

//a new round that adds the next move by simon and animates it for the user
function newRound(copy) {
    console.log('in new round');
    let level = document.getElementById('counter');
        level.innerHTML = ++counter;
    simon.push(Math.floor(Math.random() * 4)+1);
    copy = simon.slice(0);
    animate(simon, copy);

}



function userGoes(copy) {
   console.log(copy.length, copy);
    let user = [];
    document.querySelector('.board').addEventListener('click', function (e) {
               user.push(e.target.id * 1);
        if(user.length === copy.length) {
            checkResult(copy, user);
        }
       });
}

function checkResult(copy, user){
    let a = copy.join('');
    let b = user.join('');
    let msg = document.getElementById('message');
    if(a.length<27) {
        if (a === b) {
            newRound(copy);
        } else {
            msg.innerHTML = 'Try Again!';
            addClass(msg, 'appear');
            window.setTimeout(function () {
                removeClass(msg, 'appear');
                animate(copy, copy);
            }, 2500);
        }
    } else {
        msg.innerHTML = 'You Win!';
        addClass(msg, 'appear');
    }
}



//animation function
function animate(simon, copy) {
    let t = 0;
    let arr = copy;
    console.log('the array: ' +arr);
    let interval = setInterval(function () {
        brighten(simon[t]);
        makeSounds(simon[t]);
        t++;
        if (t >= simon.length) {
            clearInterval(interval);
            console.log('the array 2: ' +arr);
            userGoes(arr);
        }
    }, 1000);
}

//light up the buttons
function brighten(box) {
    var theBox = document.getElementById(box.toString());
    addClass(theBox, 'brighter');
    window.setTimeout(function () {
        removeClass(theBox, 'brighter');
    }, 500);
}

function makeSounds(simon) {
    let sounds = [
        document.getElementById('sound-one'),
        document.getElementById('sound-two'),
        document.getElementById('sound-three'),
        document.getElementById('sound-four')
    ];
    sounds[simon - 1].play();
}


/* -- Helper functions  */
function hasClass(el, className) {
    return el.classList ? el.classList.contains(className) : new RegExp('\\b'+ className+'\\b').test(el.className);
}

function addClass(el, className) { //add a new class to the element passed
    if (el.classList)
        el.classList.add(className)
    else if (!hasClass(el, className)) el.className += " " + className
}

function removeClass(el, className) { //remove a class from the element passed
    if (el.classList)
        el.classList.remove(className)
    else if (hasClass(el, className)) {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
        el.className = el.className.replace(reg, ' ')
    }
}
//function for adding opacity to the board when user clicks them
function brightenUp(el) {
    addClass(el, 'brighter');
}


