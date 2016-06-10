function cc(card) {
    'use strict';

    var move;
    switch(card) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count +=1;
            break;
        case 7:
        case 8:
        case 9:
            count = count;
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count -= 1;
    }

    if(count > 0) {
        move = count + ' Bet';
    } else {
        move = count + ' Hold';
    }

    return move;

}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(4); cc(5); cc(6);