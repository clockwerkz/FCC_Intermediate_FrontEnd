var text;

function searchText() {
	if (document.getElementById("searchTopic").value){
		text = document.getElementById("searchTopic").value;
	} else {
		text = "No data entered"
	}
	console.log(text);
}
