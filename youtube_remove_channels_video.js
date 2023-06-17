// ==UserScript==
// @name         youtube_remove_channels_video
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Sergio
// @match        *://*.youtube.com
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
let aTags;
const channels_id = ["/@news24tvua",
                     "/@ZaxidNetTV",
                     "/@radioNVua",
                    "/@Gordonua",
                    "/@novynyua",
                    "/@Stepa_chush",
                    "/@pryamiy",
                     "/@pravda_com_ua",
                    "/@FaktyICTVchannel",
                    "/@uniantv",
                    "/@krapivnyy",
                    "/@UkrlifeTvi",
                    "/@varlamov",
                    "/@holovanov",
                    "/@yulialatynina71"];


// Use setInterval for run every 2 seconds
  setInterval(() => {
      aTags = document.getElementById("content").getElementsByTagName("ytd-rich-grid-row"); // find content div id tag


for (let i = 0; i < aTags.length; i++) {

    // Depend on screen resolution, videoclips form to block 1,2,3,4,5.. in each row. Create loop for title text. Need start from 2 posittion + 5 step, for get channel id name from row,
    for (let j = 2; j < aTags[i].getElementsByTagName("yt-formatted-string").length; j += 5) {

        var a1 = aTags[i].getElementsByTagName("yt-formatted-string")[j].querySelector('.yt-simple-endpoint.style-scope.yt-formatted-string').getAttribute('href');
        console.log( a1 );

        // compare found id channel name with array  channels_id
        for (let k = 0; k < channels_id.length; k++) {
            if ( a1 == channels_id[k]) {
                console.log( "found" );
                // remove parent block
                aTags[i].getElementsByTagName("yt-formatted-string")[j].closest('ytd-rich-item-renderer').remove();
                continue;
            }
    }
    }

}

}, 2000);

})();
