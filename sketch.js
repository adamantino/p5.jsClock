function setup() {
	createCanvas(400, 400);
	angleMode(DEGREES);	
}

function draw() {
	background(43);	

	translate(width/2, height/2);

	drawTicks();

	rotate(-90);

	let hr = hour();
	let mn = minute();
	let sc = second();
	
	//seconds
	stroke(255);
	noFill();
	let scEnd = map(sc, 0, 60, 0, 360);
	arc(0, 0, 300, 300, 0, scEnd);

	push();
	rotate(scEnd);
	line(0, 0, 100, 0);
	pop();

	//minutes
	stroke(255);
	noFill();
	let mnEnd = map(mn, 0, 60, 0, 360);
	arc(0, 0, 300 - 10, 300 - 10, 0, mnEnd);

	push();
	strokeWeight(2);
	rotate(mnEnd);
	line(0, 0, 100, 0);
	pop();

	//hours
	stroke(255);	
	noFill();
	let hrEnd = map(hr % 12, 0, 12, 0, 360);
	arc(0, 0, 300 - 20, 300 - 20, 0, hrEnd);

	push();
	strokeWeight(3);
	rotate(hrEnd);
	line(0, 0, 70, 0);
	pop();

	fill(255);
	ellipse(0, 0, 5);

}

function drawTicks(){

	for(var i = 0; i<60; i++){
		push();
		if(i%5 == 0){
			strokeWeight(5);
		}
		stroke(255);
		rotate(6*i);
		line(0, 0, 175, 0);
		pop();
	}

	fill(43);
	noStroke();
	ellipse(0, 0, 330);
	
}


