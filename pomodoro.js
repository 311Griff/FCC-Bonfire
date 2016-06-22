var countView = document.querySelector('span.mins');
var startBtn = document.querySelector('.start');
var minsPom = document.getElementById("mins-input");
var minsBrk = document.getElementById('mins-break');
var minsNum = 25;
var minsBreak = 5;
var a = false;
var brk = true;

//update pom and break values with + - buttons...each has an onclick event to call these functions
function plusNumber(x) {
    if (x === 'pom' && minsPom.value >= 1) {
        minsPom.value++;
        minsNum = minsPom.value;
    } else if (x === 'brk' && minsBrk.value >= 1) {
        minsBrk.value++;
        minsBreak = minsBrk.value;
    }

}

function lessNumber(x) {
    if (x === 'pom' && minsPom.value >= 1) {
        minsPom.value--;
        minsNum = minsPom.value;

    } else if (x === 'brk' && minsBrk.value >= 1) {
        minsBrk.value--;
        minsBreak = minsBrk.value;
    }
}

//listen for the start button and make changes...
startBtn.addEventListener('click', function(e) {
    e.preventDefault();
    var startMin = minsNum - 1;
    if (!brk) {
        brk = true;
    }
    if (!a) {
        a = true;
        this.innerHTML = 'Stop/Restart';
    } else {
        a = false;
        countView.innerHTML = minsNum + " : 00";
        this.innerHTML = 'Start';

    }

    countDown(startMin);
});

//function for doing the countdown on the minutes
function countDown(min) {

    var sec = 60;

    function clock() {
        sec--;
        if (a) {
            countView.innerHTML = checkTime(min).toString() + " : " + checkTime(sec).toString();

            if (sec > 0) {
                setTimeout(clock, 1000);
            } else if (min > 0) {
                countDown(min - 1);
            } else if (min === 0 && sec === 0 && brk) {
                countDown(minsBreak - 1);
                brk = false;
            } else {
                countView.innerHTML = "All Done!!"
            }
        }

    }

    clock();
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}