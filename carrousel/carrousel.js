
var i = 0;

function init() {
	setInterval(changePicture, 2000);
}

function changePicture(){
	var src;
	switch(i%3){
		case 0:
			src = "red.png"
			break;
		case 1:
			src = "blue.png"
			break;
		case 2:
			src = "green.png"
			break;
	}
	document.getElementById('image').src = src;
	i++;
}

window.onload = init;