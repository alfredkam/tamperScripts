// ==UserScript==
//
// @name           xindmHack
//
// brief description
// @description    loads all the images for xindm.cn
//
//
// Your name, userscript userid link (optional)
// @author         arthur kam
// If you want to license out
//
//Version Number
// @version        0.33
//
// Urls process this user script on
// @match        http://*.xindm.cn/mh/*
// @match   http://xindm.cn/mh/*
//
// Add any library dependencies here, so they are loaded before your script is loaded.
//
// @require        https://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js
// @history        0.33 compatible with new update
//
// ==/UserScript==

function loadjscssfile(filename, filetype) {
    if (filetype == "js") { //if filename is a external JavaScript file
        var fileref = document.createElement('script');
        fileref.setAttribute("type", "text/javascript");
        fileref.setAttribute("src", filename);
    } else if (filetype == "css") { //if filename is an external CSS file
        var fileref = document.createElement("link");
        fileref.setAttribute("rel", "stylesheet");
        fileref.setAttribute("type", "text/css");
        fileref.setAttribute("href", filename);
    }
    if (typeof fileref != "undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref);
}

loadjscssfile("//ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js", "js");
//appends button
function loadHack() {
    var picArray = imageslist;
    var url = 'http://mh.xindm.cn';
    var imageArea = $('#imgArea');

    picArray.forEach(function (item) {
       imageArea.append('<img src="' + url + item + '" />');
    });
    
    imageArea.css({
        height: 'auto',
        width: 'auto'
    });
};
$(document).ready(function () {
    $('.w980.tc .main-btn').prepend('<button id="loadHack">LoadHack</button>');
    $('.w980.tc #loadHack').click(function () {
        loadHack();
    });
});
