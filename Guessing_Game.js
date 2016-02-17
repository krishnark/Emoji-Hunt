var numberOfFaces = 5;
var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");

function generateFaces(){

	for (var i = 0; i < numberOfFaces; i++) {
		image = document.createElement("img");
		image.src="http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png";
		image.style.top = Math.floor(Math.random() * 400) + "px";
        image.style.left = Math.floor(Math.random() * 400) + "px";
		theLeftSide.appendChild(image);
	}

	leftSideImages = theLeftSide.cloneNode(true); // true is an arguement to copy an entire branch
	leftSideImages.removeChild(leftSideImages.lastChild);
	theRightSide.appendChild(leftSideImages);
}