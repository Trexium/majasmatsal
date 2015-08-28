/*** SET BUTTON'S FOLDER HERE ***/
var buttonFolder = "Buttons/";

/*** SET BUTTONS' FILENAMES HERE ***/
upSources = new Array("btnMenu1.png", "btnCatering1.png", "btnEvent1.png", "btnContact1.png");

overSources = new Array("btnMenu2.png", "btnCatering2.png", "btnEvent2.png", "btnContact2.png");


//*** NO MORE SETTINGS BEYOND THIS POINT ***//
totalButtons = upSources.length;



//*** MAIN BUTTONS FUNCTIONS ***//
// PRELOAD MAIN MENU BUTTON IMAGES
function preload() {
	for ( x=0; x<totalButtons; x++ ) {
		buttonUp = new Image();
		buttonUp.src = buttonFolder + upSources[x];
		buttonOver = new Image();
		buttonOver.src = buttonFolder + overSources[x];
	}
}

// SET MOUSEOVER BUTTON
function setOverImg(But, ID) {
	document.getElementById('button' + But + ID).src = buttonFolder + overSources[But-1];
}

// SET MOUSEOUT BUTTON
function setOutImg(But, ID) {
	document.getElementById('button' + But + ID).src = buttonFolder + upSources[But-1];
}


//preload();
