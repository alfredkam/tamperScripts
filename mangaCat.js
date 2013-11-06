// ==UserScript==
//
// @name           mangaCat
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
// @version        1.01
//
// Urls process this user script on
// @include        *.mangacat.com/*/*
//
// Add any library dependencies here, so they are loaded before your script is loaded.
//
// @require        https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js
// @history        0.11 first version
//
// ==/UserScript==
window.onload = function() {

  document.getElementsByClassName("switch")[0].innerHTML += '<button id="loadHack">LoadHack</button>';

  function loadHack() {
      console.log("ran");
    //page number

    var url = document.getElementById("img-1").src;
	var len = $("#page").children().length;
      console.log(len);
    var regex = /http:\/\/[\w\W]*\/([\w\W]*)\.jpg/
	//http://i2-img6.mangacat.com/12649/20845960/11493460_12649.jpg
    var src = regex.exec(url);
    var basePage =  src[1].split("_");
      
      var startPage = parseInt(basePage[0]);
      for(var i=0;i<len;i++){
          var str = "<img src='"+src[0].replace(src[1],(startPage+i)+"_"+basePage[1])+"'/>";
          console.log(str);
		$("#canvas-1").append(str);

      }
   
  }

  document.getElementById("loadHack").onclick = loadHack;
};
