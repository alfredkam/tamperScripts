// ==UserScript==
//
// @name           xindmHack 
//
// brief description
// @description    loads all the images 
//
//URI (preferably your own site, so browser can avert naming collisions
// @namespace      http://www.sarathonline.com/dyn/userscripts/hello/
//
// Your name, userscript userid link (optional)   
// @author         arthur kam
// If you want to license out
//
//Version Number
// @version        0.11
//
// Urls process this user script on
// @include        *.xindm.cn/*
//
// Add any library dependencies here, so they are loaded before your script is loaded.
//
// @require        https://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js
// @history        0.11 first version
//
// ==/UserScript==
function loadjscssfile(filename, filetype){
if (filetype=="js"){ //if filename is a external JavaScript file
var fileref=document.createElement('script')
fileref.setAttribute("type","text/javascript")
fileref.setAttribute("src", filename)
}
else if (filetype=="css"){ //if filename is an external CSS file
var fileref=document.createElement("link")
fileref.setAttribute("rel", "stylesheet")
fileref.setAttribute("type", "text/css")
fileref.setAttribute("href", filename)
}
if (typeof fileref!="undefined")
document.getElementsByTagName("head")[0].appendChild(fileref)
}

loadjscssfile("//ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js","js");
//appends button
 var x = function hackLoad(){
    var picArray = ArrayPhoto;
    $('.ktpshow').append('<div id="holder"></div>');
    for (var i in picArray){$('#holder').append("<img src='"+picArray[i]+"'></img>");}
}
//window.akam=hackLoad
//window.akam.hackLoad=hackLoad;
$($('td')[0]).append('<button id="loadHack" onclick="hackLoad();">LoadHack</button>');
var y="$('#loadHack').on('click',function(){hackLoad();})";
var fileref=document.createElement('script');
fileref.setAttribute("type","text/javascript");
fileref.textContent=x.toString()+y;
console.log(fileref);
document.getElementsByTagName("head")[0].appendChild(fileref)

//document.body.appendChild(fileref);


function loadHack(){
var picArray = ArrayPhoto;
$('.ktpshow').append('<div id="holder"></div>');
for (var i in picArray){$('#holder').append("<img src='"+picArray[i]+"'></img>");}
}
