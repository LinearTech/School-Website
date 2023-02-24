document.onload = load();

function setResolution(){
	element1 = document.getElementById("target");
	if ( ( screen.width == 1366 ) && ( screen.height == 768 ) ) {
		element1.insertAdjacentHTML("afterbegin", "<link rel='stylesheet' href='../css/chromeOScss.css'><link rel='icon' href='../graphics/icons/cte_site_icon.png'><style>html{background-image: url('../graphics/bg/mainBg.jpg');background-size: 2500px, 1600px;}</style>");
		const style = document.getElementById("menu")
		const newVal = style.width
		alert(newval)
	}
	else
	{
		element1.insertAdjacentHTML("afterbegin", "<link rel='stylesheet' href='../css/mainCss.css'><link rel='icon' href='../graphics/icons/cte_site_icon.png'><style>html{background-image: url('../graphics/bg/mainBg.jpg');background-size: 2500px, 1600px;}</style>");
	}
}

function dateSet()
{
		var date = new Date();
		var currentDate = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
		document.getElementById("p1").innerHTML = currentDate;
}
function load()
{
	setResolution(); 
	dateSet();
}
