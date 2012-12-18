// ==UserScript==
//
// @name           99770
//
// brief description
// @description    loads all the images 
//
//URI (preferably your own site, so browser can avert naming collisions
// @namespace      http://www.sarathonline.com/dyn/userscripts/hello/
//
// Your name, userscript userid link (optional)   
// @author         alfred kam
// If you want to license out
//
//Version Number
// @version        1.00
//
// Urls process this user script on
// @include        *.99770.cc/*
//
// Add any library dependencies here, so they are loaded before your script is loaded.
//
// @require        https://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js
// @history        0.11 first version
//
// ==/UserScript==
window.onload = function() {

document.getElementsByClassName("c")[0].innerHTML+='<button id="loadHack">LoadHack</button>';

function loadHack(){
	var list = PicListUrl.split("|");  //contains all the pic list
	//need to figure out the rest of url
	var src = document.getElementById("ComicPic").src;
	for(var i=0;i<list.length;i++) {
		src = src.replace(list[i],"");
	}

	var str = "";
	for(var i=0;i<list.length;i++) {
		str+="<img id='C' src='"+(src+list[i])+"'/>";
	}
	document.getElementsByClassName("e")[0].innerHTML = str;
	
}

document.getElementById("loadHack").onclick = loadHack;
};
