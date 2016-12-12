var searchValue="";
//var wikiBase = "https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&titles=";
var wikiBase = "https://en.wikipedia.org/w/api.php?action=parse&page=";


//Wikipedia result formatting
var resultPanelHeading = '<div class="panel panel-default"><div class="panel-heading"><a href="';
var resultPanelBody = '</h3></a></div><div class="panel-body">';
var resultPanelFooter = '</div></div>';
var resultPaneTitle = '" target="_blank"><h3 class="panel-title">';


var wikiLinkBase = "https://en.wikipedia.org/wiki/";
var whiteSpace = /\s+/g;

var searchResults = document.getElementById("searchResults");
var resultString = "";
var urlLink = "";

//var wikiSearch = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=miami&prop=info&inprop=url&utf8=&format=jsonfm&callback=?"


function randomWiki() {
	window.open("https://en.wikipedia.org/wiki/Special:Random");
}


function searchText() {

	if (document.getElementById("searchTopic").value){

		wikiSearch();
		
	} else {
		text = "No data entered";
	}

}

function wikiSearch() {
	searchValue = document.getElementById("searchTopic").value;

	$.ajax({
			url:"https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + searchValue + "&prop=info&inprop=url&utf8=&format=json",
			dataType: "jsonp",
			async: false,
			success: function (response) {

				var obj = response.query;
				var items = obj.search;

				itemList = Object.keys(items);

				for (key in itemList){
				
					resultString += resultPanelHeading + wikiLinkBase + items[key].title.replace(whiteSpace, "_") + resultPaneTitle + items[key].title+resultPanelBody + items[key].snippet + "..." + resultPanelFooter;	
				}
				searchResults.innerHTML = resultString;

			},
			error: function() {
				alert("Error");
			}
		});
}






/*
https://en.wikipedia.org/w/api.php?action=query&list=allcategories&acprefix=miami&format=jsonfm

https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=miami&format=jsonfm

https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=miami&formatversion=2

/*resultDiv = document.createElement("div");
					resultDiv.className += 'col-sm-8 col-sm-offset-2';
					urlLink = items[key].title;
					resultDiv.innerHTML = resultPanelHeading + wikiLinkBase + items[key].title.replace(whiteSpace, "_") + resultPaneTitle + items[key].title;
					resultDiv.innerHTML +=resultPanelBody + items[key].snippet + "..." + resultPanelFooter;
					wikiReturn.appendChild(resultDiv);*/	

