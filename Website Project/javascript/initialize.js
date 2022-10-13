class initalSetup extends HTMLElement
{
	constructor()
	{
		const shadow = this.attachShadow({mode: 'open'});
		
		const custList = document.createElement('list');
		custList.setAttribute('id', 'menu');
		
		custList.innerHTML = '<ul><a href="CarTechERP.html">Home</a></ul><ul><a href="courseOverview.html">Course Overview</a></ul><ul><a href="about.html">About</a></ul><ul><span id="p1" class="date"></span><b id="transparent">-</b></ul>';
		shadow.appendChild(custList);
	}
}
customElements.define("initialSetup", initalSetup);
