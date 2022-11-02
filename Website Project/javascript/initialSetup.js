document.onload = setResolution();
function setResolution(){
	element1 = document.getElementById("target");
	if ( ( screen.width == 1366 ) && ( screen.height == 768 ) ) {
		element1.insertAdjacentHTML("afterbegin", "<link rel='stylesheet' href='../css/chromeOScss.css'><link rel='icon' href='../graphics/icons/cte_site_icon.png'><style>html{background-image: url('../graphics/bg/mainBg.jpg');background-size: 2500px, 1600px;}</style>");
	}
	else
	{
		element1.insertAdjacentHTML("afterbegin", "<link rel='stylesheet' href='../css/mainCss.css'><link rel='icon' href='../graphics/icons/cte_site_icon.png'><style>html{background-image: url('../graphics/bg/mainBg.jpg');background-size: 2500px, 1600px;}</style>");
	}
}