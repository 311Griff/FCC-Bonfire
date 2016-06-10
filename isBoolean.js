//easy quick function to determine if the type of an arg is boolean or not
function booWho(bool) {
    'use strict';
    return (typeof bool == 'boolean') ? true : false;
}

booWho(null);
