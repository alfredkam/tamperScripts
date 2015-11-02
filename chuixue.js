// ==UserScript==
// @name       chuixue
// @namespace  http://www.chuixue.com/manhua/*
// @version    0.1
// @description  enter something useful
// @match      http://www.chuixue.com/manhua/*/*.html*
// @copyright  2012+, You
// ==/UserScript==

// qTcms_S_m_murl.split('$qingtiandy$')

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



function loadImages(ele, images) {
    var initialPage = 0;
    var lastPage = images.length;
    for (var i = initialPage; i <= lastPage; i++ ) {
        //console.log('<img src="' + baseUrl + '/' + fixIndex(i) + '"></img>');
        $(ele).append('<img style="display:block;" src="'+ images[i] + '"></img>');
    }
}

function addButton() {
    $('#pagination').append('<button class="loadHack">Hack</button>');
}

function listenToHack() {
    $("#pagination .loadHack").click(function () {
        var images = qTcms_S_m_murl.split('$qingtiandy$');
        loadImages('table #wdwailian', images);
    });
}

$(document).ready(function () {
    addButton();
    listenToHack();
});
