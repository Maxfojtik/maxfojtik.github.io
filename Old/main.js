function url_update(element){
    window.parent.location.href = element.getAttribute('value');
}
function scrollListener()
{
	if (document.body.scrollTop > 200) 
	{
		document.getElementById("navwrapper").className = "navwrapperFixed";
		document.getElementById("bottom").style = "padding-top: "+(document.getElementById("navwrapper").clientHeight-5)+"px;";
		//var myDiv = document.getElementById("navwrapper");
		//document.getElementById("navwrapperfixedspacer").style = "height: "+myDiv.clientHeight;
	}
	else 
	{
		document.getElementById("navwrapper").className = "navwrapper";
		document.getElementById("bottom").style = "padding-top: 0px;"
		//document.getElementById("navwrapperfixedspacer").style = "height: 0";
	}
}
function toggleG()
{
	
}