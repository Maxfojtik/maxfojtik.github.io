var selectedTick = 0;
var numTicks = 5;
function tick()
{
	for(var i = 0; i < numTicks; i++)
	{
		if(i==selectedTick)
		{
			document.getElementById("Ticker"+(i)).style = "display:block; width: 25%;";
		}
		else
		{
			document.getElementById("Ticker"+(i)).style = "display:none; width: 25%;";
		}
	}
	selectedTick++;
	if(selectedTick>=numTicks)
	{
		selectedTick = 0;
	}
}
setInterval(tick, 1000);