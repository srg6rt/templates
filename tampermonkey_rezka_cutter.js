// ==UserScript==
// @name         rezka
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       sergio
// @match        *://*.hdrezka.ag/*
// @grant        none
// ==/UserScript==


// Remove all movies from specific countries in rezka.ag
(function() {
    'use strict';

    for (let m = 0; m <= 4; m++) {

    var div = document.getElementsByClassName('b-content__inline_item-link');
    console.log(div.length);
    for (let i = 0; i < div.length; i++) {
        // set country you want to remove from site
        //let result = div[i].innerText.includes("Россия")  ;
        console.log(div[i].innerText);


        if ( div[i].innerText.includes("Россия") ) {
        document.getElementsByClassName('b-content__inline_item')[i].remove();
        }

        else if ( div[i].innerText.includes("СССР") ) {
        document.getElementsByClassName('b-content__inline_item')[i].remove();
        }

        else if ( div[i].innerText.includes("Корея") ) {
        document.getElementsByClassName('b-content__inline_item')[i].remove();
        };

    };


    };

 })();
