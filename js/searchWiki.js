var searchValue;
var wikiBase = "https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&rvsection=0&titles=";
var wikiJsonAttrib = "&format=json&callback=?";

console.log(document.getElementById("wikiReturn").innerHTML);

function searchText() {
	if (document.getElementById("searchTopic").value){
		searchValue = document.getElementById("searchTopic").value;
		$.getJSON(wikiBase+searchValue+wikiJsonAttrib, function(data){
			var jsonData = JSON.stringify(data);
			document.getElementById("wikiReturn").innerHTML=jsonData;
		});
	} else {
		text = "No data entered"
	}
}
