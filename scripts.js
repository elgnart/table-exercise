function table()
{
	var rows = parseInt(prompt("How many rows?"));
	var columns = parseInt(prompt("How many columns?"));
	var letter = prompt("What's your favorite letter?");
	var text="";

	for(var i=1; i<=rows; i++){
		text+=letter.repeat(columns)+"<br />";
		}
	return text;
}

document.write(table());