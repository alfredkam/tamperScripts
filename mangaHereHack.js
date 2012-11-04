// ==UserScript==
//
// @name           mangaHere
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
// @version        1.01
//
// Urls process this user script on
// @include        wwww.idler-et.com/manga/*
//
// Add any library dependencies here, so they are loaded before your script is loaded.
//
// @require        https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js
// @history        0.11 first version
//
// ==/UserScript==

window.onload = function() {

document.getElementById("title").innerHTML+='<button id="loadHack">LoadHack</button>';

function loadHack(){
	//page number
	var x = document.getElementsByTagName("input")[0].parentNode.innerHTML.match(/当前：1\s\|\s共：(.*)\s\|\s上一页/)[1];
	//get URL
	var url = document.getElementById("discomic").getElementsByTagName("img")[0].src;
	var arr = url.split(/\//);
	var zeros = arr.pop();
	url = arr.join("/");

	url = url.replace(/zeros/,"");
	zeros = zeros.split("");
	var counter = 0;
	for(var i=0;i < zeros.length; i++) {
		if(zeros[i].toString() == "0")
			counter+=1;
		else
			break;
	}

	var html = "";
	
	for(var i=1, len = parseInt(x); i <= len; i++) {
		var z = counter;
		if(i < 10)
			z+=0;
		else if(i < 100)
			z-=1;
		else if(i < 1000)
			z-=2;
		var img = url+"/";
		for(var j=0;j<z;j++){
			img+="0";
		}
		img+=""+i+".jpg";	

		html+="<a href='javascript:void(0);'><img id='DisComic' name='DisComic' border='0'src='"+img+"'/></a>";	
	}

	//$("#discomic").html(html);
	document.getElementById("discomic").innerHTML = html;
}

document.getElementById("loadHack").onclick = loadHack;
};
