var searchValue;
//var wikiBase = "https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&titles=";
var wikiBase = "https://en.wikipedia.org/w/api.php?action=parse&page=";
var wikiJsonAttrib = "&format=json&callback=?";


var wikiSearch = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=miami&prop=info&inprop=url&utf8=&format=jsonfm&callback=?"


console.log(document.getElementById("wikiReturn").innerHTML);

function searchText() {
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
			console.log(JSON.stringify(obj));
			itemList = Object.keys(obj.search);
			console.log(itemList);
			for (key in itemList){
				console.log(obj.search[key]);
				document.getElementById("wikiReturn").innerHTML+=JSON.stringify(obj.search[key])+"<br>";
			} 
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