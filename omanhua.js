// ==UserScript==
// @name       omanhua
// @namespace  http://www.omanhua.com/comic/*
// @version    0.1
// @description  enter something useful
// @match      http://www.omanhua.com/comic/*
// @copyright  2012+, You
// ==/UserScript==

/*
 *  WARNING: May not always work, there a slight difference in schema between a chapter and an entire volume.  Increments of X: 0000X vs 00(X-1)00X
 *
 */
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

function fixIndex(page, trailingZerosLength) {
    if (String(page).length < trailingZerosLength) {
      for (var i = (String(page).length); i < trailingZerosLength; i++) {
          page = '0' + page;
      }
    }
    return page + '.jpg';
}

function loadImages(ele, baseUrl, initialPage, lastPage, trailingZerosLength) {
    for (var i = initialPage; i <= lastPage; i++ ) {
        $(ele).append('<img src="' + baseUrl + '/' + fixIndex(i, trailingZerosLength) + '"></img>');
    }
}

function createBtn() {
    $(".w980 .main-btn").append('<button class="loadHack">Hack</button>');
}

function listenToHack() {
    var src = $('.clearfix table.tbCenter #mangaBox #mangaFile').attr("src");
    var baseUrl = src.replace(/\/[0-9]+.jpg/, '');
    var trailingZerosLength = src.replace(/.*\/([0-9]+).jpg.*/, '$1').length - 1;
    var lastPage = $('#pageSelect option').length;
    $(".w980 .main-btn .loadHack").click(function () {
        loadImages('.clearfix table.tbCenter #mangaBox', baseUrl, 2, lastPage, trailingZerosLength);
    });
}

$(document).ready(function () {
   createBtn();
   listenToHack();
});
