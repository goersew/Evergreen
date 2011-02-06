/* Mark Schenk, http://www.markschenk.com/tools/javascript/ */

function faviconize(){
	var links = document.getElementById('content').getElementsByTagName('a');
	for (var i=0; i<links.length; i++) {
		var link = links[i];
		setFavicon(link);
	}
}

function setFavicon(link) {
	var hrefvalue = link.getAttribute("href");
	if (hrefvalue && hrefvalue.match(/^http:/) &&  !hrefvalue.match(/www\.markschenk\.com/))  // check whether external link
	{
		var domain = hrefvalue.match(/(\w+):\/\/([^/:]+)(:\d*)?([^# ]*)/);
		domain = RegExp.$2;
	
		var fav = document.createElement("img");
		fav.className = " faviconimg";
		var favsrc = "http://" + domain + "/favicon.ico";
		fav.setAttribute("src",favsrc);
		fav.setAttribute("alt","Favicon of " + domain);
		fav.onerror = function () {
			this.src = "http://www.markschenk.com/images/icons/icon_external.png";
			this.setAttribute("alt","External link");
		}
		link.appendChild(fav);
	}
}