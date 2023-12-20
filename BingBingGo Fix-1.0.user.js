// ==UserScript==
// @name         BingBingGo Fix
// @version      1.0
// @description  Some BingBingGo fixes, that happen before DDG loads
// @author       florin
// @match        *://duckduckgo.com/*
// @icon         https://bingbinggo.neocities.org/s/wlflag.ico
// @exclude      https://duckduckgo.com/settings
// @grant        GM_addStyle
// @run-at document-start
// ==/UserScript==

(function() {
    'use strict';

    function fixShit() {
        GM_addStyle(`
div#header {
    margin-top: 1000000000000000px;
}
        `);
    }

    if (window.location.href === 'https://duckduckgo.com/') {
        fixShit();
        window.location.href = 'https://bingbinggo.neocities.org/';
    } else {
         fixShit();
    }

        function modifyTitle() {
        const searchInput = document.querySelector('input[name=q]');
        const searchTerm = searchInput ? searchInput.value : '';

        document.title = `Bing`;
    }

    modifyTitle();

    //Because Firefox sucks, this has to be done this way
    function changeFavicon() {
        var base64Favicon = 'data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPLSsArnrXAT35JA/9+SQP/fkkD/35JA/+etcBDvyaAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7L+QENd2EP/UbQD/1G0A/9RtAP/UbQD/1nYP/9RtAP/UbQD/1G0A/9d2EP/qtoAIAAAAAAAAAAAAAAAA5KRgENRtAP/UbQD/2X8f/+7In//89e/////////////89e//7sif/9l/H//UbQD/1G0A/9+SQAQAAAAA6raAENRtAP/UbQD/3Igv//z17///////xOj//4rS//+K0v//teP/////////////4ZpP/9RtAP/UbQD/561wENl/IP/UbQD/1G0A//ns3///////itL//xWm//8Vpv//Fab//xWm//97zP////////z17//UbQD/1G0A/9RtAP/UbQD/1G0A/9RtAP///////////0+8//8Vpv//Fab//xWm//8Vpv//T7z/////////////3pE//9RtAP/UbQD/1G0A/9RtAP/UbQD/+ezf//////+n3f//Fab//xWm//8Vpv//Fab//5jY/////////PXv/9RtAP/UbQD/13YQ/9RtAP/UbQD/1G0A/9yIL//89e///////9Pu//+K0v//itL//9Pu/////////PXv/9yIL//UbQD/1G0A/+q2gCDUbQD/1G0A/9RtAP/UbQD/1nYP/+y/j//57N/////////////57N//7sif/9l/H//UbQD/1G0A/+SkYCAAAAAA1G0A/9RtAP/ZfyD/2X8g/9RtAP/UbQD/1G0A/9RtAP/UbQD/1G0A/9RtAP/UbQD/2X8g/+/JoAgAAAAAAAAAANRtAP/UbQD/35JA/wAAAAD35NAB6raAEOGbUP/fkkD/35JA/+GbUP/qtoAI9NvABAAAAAAAAAAAAAAAAAAAAADUbQD/1G0A/9+SQP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1G0A/9RtAP/fkkD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANRtAP/UbQD/35JA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8AAPAPAADAAwAAgAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAADAAAQDwAAH/8AAB//AAAf/wAA//8AAA==';

        document.querySelectorAll('link[rel*="icon"]').forEach(function(link) {
            link.parentNode.removeChild(link);
        });

        var newFaviconLink = document.createElement('link');
        newFaviconLink.rel = 'shortcut icon';
        newFaviconLink.type = 'image/x-icon';
        newFaviconLink.href = base64Favicon;

        try {
            document.head.appendChild(newFaviconLink);
            console.log('Favicon changed successfully.');
        } catch (error) {
            console.error('Error adding favicon:', error);
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(changeFavicon, 50);
    });
})();