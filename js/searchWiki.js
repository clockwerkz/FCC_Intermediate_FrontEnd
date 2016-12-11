var searchValue;
//var wikiBase = "https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&titles=";
var wikiBase = "https://en.wikipedia.org/w/api.php?action=parse&page=";
var wikiJsonAttrib = "&format=json&callback=?";


var wikiSearch = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=miami&prop=info&inprop=url&utf8=&format=jsonfm&callback=?"
var resultString = "";

console.log(document.getElementById("wikiReturn").innerHTML);

function searchText() {
	resultString = "";
	if (document.getElementById("searchTopic").value){
		searchValue = document.getElementById("searchTopic").value;

		/*$.getJSON(wikiBase+searchValue+wikiJsonAttrib, function(data){
		$.getJSON(wikiSearch, function(data){
			var jsonData = JSON.stringify(data);
			document.getElementById("wikiReturn").innerHTML=data;
			console.log(jsonData);
		});*/
		$.ajax({
		url:"https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + searchValue + "&prop=info&inprop=url&utf8=&format=json",
		dataType: "jsonp",
		async: false,
		success: function (response) {
			var obj = response.query;
			//console.log(JSON.stringify(obj));
			var items = obj.search;
			itemList = Object.keys(items);
				for (key in itemList){
					resultString +="<h3>"+items[key].title+"</h3> <p>"+items[key].snippet+"</p><br>";
				}
				document.getElementById("wikiReturn").innerHTML=resultString;
		},
		error: function() {
			alert("Error");
		}
	});
		
	} else {
		text = "No data entered"
	}


	
}



/*
https://en.wikipedia.org/w/api.php?action=query&list=allcategories&acprefix=miami&format=jsonfm

https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=miami&format=jsonfm

https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=miami&formatversion=2

*/