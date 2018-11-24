
function generate(){
	var adj=["happy","sad","angry","quirky","stinky"];
	var noun=["cat","dog","bird","baby","goat"];
	document.getElementById("line").append("What a " );
	document.getElementById("line").append(adj[Math.floor(Math.random()*4)]);
	document.getElementById("line").append(" ");
	document.getElementById("line").append(noun[Math.floor(Math.random()*4)])
	document.getElementById("line").append("</br>");
}
