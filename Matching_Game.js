var numberOfFaces = 5;
var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");
var theBody = document.getElementsByTagName("body")[0];

function generateFaces(){

	while (theLeftSide.firstChild) {
        theLeftSide.removeChild(theLeftSide.firstChild);
    }
    
    while (theRightSide.firstChild) {
    	theRightSide.removeChild(theRightSide.firstChild);
    }

	for (var i = 0; i < numberOfFaces; i++) {
		image = document.createElement("img");
		image.src="smile.png";
		image.style.top = Math.floor(Math.random() * 400) + "px";
        image.style.left = Math.floor(Math.random() * 400) + "px";
		theLeftSide.appendChild(image);
	}

	leftSideImages = theLeftSide.cloneNode(true); // true is an arguement to copy an entire branch
	leftSideImages.removeChild(leftSideImages.lastChild);
	theRightSide.appendChild(leftSideImages);

	theLeftSide.lastChild.onclick = function nextLevel(event){

		console.log("I am inside the click event");
		event.stopPropagation();
		numberOfFaces += 5;
		generateFaces();
	}

	theBody.onclick = function gameOver() {
		
		console.log("I am inside the click event");
		alert("Game Over!");
		theBody.onclick = null;
		theLeftSide.lastChild.onclick = null;
	}
}
