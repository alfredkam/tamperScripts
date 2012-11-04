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
// @include        *.mangahere.com/manga/*
//
// Add any library dependencies here, so they are loaded before your script is loaded.
//
// @require        https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js
// @history        0.11 first version
//
// ==/UserScript==

window.onload = function() {

    document.getElementsByClassName("title")[0].innerHTML+='<button id="loadHack">LoadHack</button>';

    function loadHack(){
        //page number
        var pageNumber = document.getElementsByClassName("wid60")[0].length;
        
        var url = document.getElementById("image").src;
	
        //one of the sample url http://c.mhcdn.net/store/manga/8471/002.0/compressed/h002.30.jpg
        //another example of url http://c.mhcdn.net/store/manga/11752/001.0/compressed/o000.jpg
        //another example http://c.mhcdn.net/store/manga/8553/034.0/compressed/l025a.jpg
        
        var arr = url.split(/\//);
        var bug = arr.pop();
	bug = bug.replace(/\.jpg/);
	var defaultStr = arr.join("/")+"/";

	//check for condition  - h002.30
	if(bug.split(/\./).length > 1) {
		var temp = bug.split(/\./);
		defaultStr += temp.shift()+".";
		bug = temp.pop();
	}
	
	//check for left/right condition	- l025a
	var right = bug.match(/[0-9].*/)[0];
	defaultStr+=bug.replace(right,"");
	bug = right;
	var num = bug.match(/[0-9]+/)[0]; 
	right = bug.replace(num,"");

	var str = "";
	for(var i=0;i<pageNumber;i++) {
		var pos = "";
		var origin_len = num.toString().length;
		pos = parseInt(num)+i;
		var int_len = pos.toString().length;
		for(var j=0;j<(origin_len-int_len);j++) {
		    pos = "0"+pos;
		}
                        
		if(right == "") {
			str+="<img src='"+defaultStr+(pos)+".jpg'/>";
		} else {
			str+="<img src='"+defaultStr+(pos)+".jpg'/>";
			str+="<img src='"+defaultStr+(pos)+"a.jpg'/>";
			str+="<img src='"+defaultStr+(pos)+"b.jpg'/>";
		}
	}
        document.getElementsByClassName("read_img")[0].innerHTML=str;
    }

    document.getElementById("loadHack").onclick = loadHack;
};
