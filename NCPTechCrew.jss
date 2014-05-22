function homeReveal(){

	document.getElementById("about").style.opacity=1;
	document.getElementById("resources").style.opacity=0;
	document.getElementById("members").style.opacity=0;
	document.getElementById("projects").style.opacity=0;


}


function membersReveal(){

	document.getElementById("about").style.opacity=0;
	document.getElementById("resources").style.opacity=0;
	document.getElementById("members").style.opacity=1;
	document.getElementById("projects").style.opacity=0;


}

function projectsReveal(){

	document.getElementById("about").style.opacity=0;
	document.getElementById("resources").style.opacity=0;
	document.getElementById("members").style.opacity=0;
	document.getElementById("projects").style.opacity=1;


}

function resourcesReveal(){

	document.getElementById("about").style.opacity=0;
	document.getElementById("resources").style.opacity=1;
	document.getElementById("members").style.opacity=0;
	document.getElementById("projects").style.opacity=0;


}
