var connection = new BackendConnection()

console.log("..--- ----- .---- ----.");
console.log("ee(e6d2c68d)");
$(document).ready(function(){
	$("#progress-bar").width($(document).width()*.80-$("#progress-label").width()-10+"px")
});
function setProgress(progress)
{
	$("#progress-bar-completed").animate({width: (progress/10.0*100)+"%",}, 500);
	$("#progress-label").text(progress+"/10");
	$("#progress-bar").width($(document).width()*.80-$("#progress-label").width()-10+"px");
}
function ee(key)
{
	connection.send("Unlock:"+key);
}
function displayCode() //displays a ASCII QR code
{
	console.log("█▀▀▀▀▀█ ▀▀    █ ▄ █▀▀▀▀▀█\n█ ███ █ █▄ █▀█ █▄ █ ███ █\n█ ▀▀▀ █ ▀█▀▀▄ ▄▀  █ ▀▀▀ █\n▀▀▀▀▀▀▀ ▀▄▀▄▀ █▄▀ ▀▀▀▀▀▀▀\n▀▀▀▀▄▄▀▄▀▄    ▄ █▀ ▄▀█▀▄▀\n██▀▀  ▀██  ▄▄▄▀ ▄▄▄▀ ██▄ \n▀▀███▀▀▄ █▄█ ▀ ▄  █▄█▄▀▄█\n▄▀▀▄▀█▀█▀▄▀ █▀ ▄▄ ▀▄  ▀█▄\n    ▀ ▀▀▄██▀▄█  █▀▀▀█▄█  \n█▀▀▀▀▀█  ▀ ▀█  ▄█ ▀ █▄ █▀\n█ ███ █ ▄██▀▄ ▀ ▀▀█▀▀█ ▄█\n█ ▀▀▀ █ █  ▀▀▄▄▀ ▀▀█▀ █▀ \n▀▀▀▀▀▀▀ ▀▀▀▀▀▀    ▀  ▀▀▀▀");
}
function mode(mode)
{
	connection.send("Mode:"+mode);
}
function setColor(name)
{
	connection.send("SetColor:"+name);
}