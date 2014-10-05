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
// @version        0.32
//
// Urls process this user script on
// @match        http://*.xindm.cn/mh/*
// @match   http://xindm.cn/mh/*
//
// Add any library dependencies here, so they are loaded before your script is loaded.
//
// @require        https://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js
// @history        0.31 fixed the include to work better
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
var x = function hackLoad(input,j, ogUrl) {
    var picArray = input || ArrayPhoto;
    var j = j||0;
    var urlPrependText="";
    console.log(j);
    if(!ogUrl){
     var ogUrl = $("#PicNow")[0].src;

        if(ogUrl.indexOf("xindm")===-1){
			urlPrependText =   "http://beiyong.bukamh.com";          
        }
    }
    if($("#holder #crawl"+i).length==0){
        $("#holder").append("<div id='crawl"+j+"'></div><br>");
    }
    for (var i in picArray) {
        // if(!j){
        //     $('#holder').append("<img src='" + picArray[i] + "'></img>");
        // }
        // else{
        var url  = urlPrependText + picArray[i];
        $("#holder #crawl"+j).append("<img src='" + url + "'></img>");
        //}
    }
};
var  crawlHack= function hackCrawl() {

    var len =$('#hackAmount').val()||5;
    var regex = /var ArrayPhoto=(new Array\(.+"\))/;
    var nextURLRegex =/<td width="220" align="right" valign="middle"><span><a href="(.*)" target="_blank">/;
    var nextURL = nextURLRegex.exec($("body").html())[1];
    hackLoad(null,len+1);
 
    // for (i= 1; i < len; i++) {
    var recurLoad = function(url,recur){
        if(recur==0){
            //append the link
           	$("td[width='220'][align='right']").append("<br><span><a href='"+url+"'>next</a></span>");
        	return;
        }
        var a=recur;
        console.log(url);
        $.ajax({
            url: url,
            // async: true
        }).done(function(data) {
            console.log(data);
            var res = regex.exec(data);
            var url = nextURLRegex.exec(data);
            // console.log(res[1]);
            hackLoad(eval(res[1]),a);
            // console.log(url);
            recur--;
            recurLoad(url[1],recur);
        });
    }
    recurLoad(nextURL,len);
};
$($('td')[0]).prepend('<button id="loadHack" onclick="hackLoad();">LoadHack</button>' + '<button id="crawlHack" onclick="hackCrawl();">Crawl hack</button><input type="number" val=5 id="hackAmount">5</input>');
var y = "$('#loadHack').on('click',function(){hackLoad();});";
var z = "$('#crawlHack').on('click',function(){crawlHack();});";
var fileref = document.createElement('script');
fileref.setAttribute("type", "text/javascript");
fileref.textContent = x.toString() +"\n"+ crawlHack.toString() +"\n"+ y +"\n"+ z;
// console.log(fileref);
document.getElementsByTagName("head")[0].appendChild(fileref);
$('.ktpshow').append('<div id="holder"></div>');


//document.body.appendChild(fileref);

/*
function loadHack(){
var picArray = ArrayPhoto;
$('.ktpshow').append('<div id="holder"></div>');
for (var i in picArray){$('#holder').append("<img src='"+picArray[i]+"'></img>");}
}*/
