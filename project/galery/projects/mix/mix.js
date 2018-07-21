var i = 0;

function init() {
	document.getElementById('header').style.backgroundColor = 'red';
	setInterval(changePicture, 2000);
	setInterval(updateCount, 1000);
}

function changePicture(){
	var src;
	switch(i%3){
		case 0:
			color = "blue"
			break;
		case 1:
			color = "green"
			break;
		case 2:
			color = "red"
			break;
	}
	document.getElementById('header').style.backgroundColor = color;
	i++;
}

function updateCount(){
	var value = document.getElementById('count').textContent;
	var values = String(value).split(":");
	if(values[2] == "59"){
		values[2] = "00"
		if(values[1] == "59"){
			var hour = parseInt(values[0]);
			++hour;
			if (hour < 10) values[0] = "0"+hour;
			else values[0] = hour;
			values[1] == "00"
		} else {
			var min = parseInt(values[1]);
			++min;
			if (min < 10) values[1] = "0"+min;
			else values[1] = min;
		}
	} else {
		var sec = parseInt(values[2]);
		++sec;
		if (sec < 10) values[2] = "0"+sec;
		else values[2] = sec;
	}
	document.getElementById('count').textContent = values[0] + ":" + values[1] + ":" + values[2];
}

function updateLabel() {
	var value = String(document.getElementById("helloTextfield").value);
	if(value.length > 0){
		document.getElementById("helloLabel").textContent = "Hello " + value;
	} else {
		document.getElementById("helloLabel").textContent = "";
	}
}
window.onload = init;