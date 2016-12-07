var searchValue;
var wikiBase = "http://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&rvsection=0&titles=";
var wikiJsonAttrib = "&format=json";

function searchText() {
	if (document.getElementById("searchTopic").value){
		searchValue = document.getElementById("searchTopic").value;
		$.getJSON(wikiBase+searchValue+wikiJsonAttrib, function(data){
			document.getElementById("wikiReturn").innerHTML=data;
		});
	} else {
		text = "No data entered"
	}
	console.log(searchValue);
}
