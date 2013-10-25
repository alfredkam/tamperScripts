// ==UserScript==
//
// @name           mangaReader
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
// @include        *.mangareader.net/*
//
// Add any library dependencies here, so they are loaded before your script is loaded.
//
// @require        https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js
// @history        0.11 first version
//
// ==/UserScript==

window.onload = function() {

    document.getElementsByClassName("c2")[0].innerHTML+='<button id="loadHack">LoadHack</button>';

    function loadHack(){
        //page number
        var pageNumber = document.getElementById("pageMenu").length;
	var holder = document.getElementById("imgholder");
        var url = document.getElementById("img").src;
	//one of the example url http://i23.mangareader.net/historys-strongest-disciple-kenichi/1/historys-strongest-disciple-kenichi-551353.jpg
        
        var arr = url.split(/\//);
        var bug = arr.pop().toString().replace(/\.jpg/,"");
	var defaultURL = arr.join("/")+"/";
	
	var num = bug.match(/[0-9]+/)[0];
	defaultURL += bug.replace(num,"");

	var str="";
	for(var i=0;i<parseInt(pageNumber)*2;i+=2) {
		str+="<img src='"+defaultURL+(parseInt(num)+i)+".jpg' />";
	}
                            console.log(str);
	holder.innerHTML = str;
    }

    document.getElementById("loadHack").onclick = loadHack;
};
