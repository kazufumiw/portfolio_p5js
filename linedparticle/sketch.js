var fr = 60.0;
var pn = 50;
var p_array = [];
var distance;
var close = 250.0;

class Particle{
  constructor(x, y, vel_x, vel_y){
    this.x = x;
		this.y = y;
		this.vel_x = vel_x;
		this.vel_y = vel_y;
		this.r = 6;
  }
};


function setup() {
	createCanvas(windowWidth, windowHeight);
	//clear();
  colorMode(HSB, 360, 100, 100, 255);
  frameRate(fr);
	for (var i = 0; i < pn; i++){
		p_array.push(new Particle(windowWidth*Math.random(), windowHeight*Math.random(), 0.3*windowWidth*(Math.random()-0.5), 0.3*windowHeight*(Math.random()-0.5)));
		print(p_array[i].x, i);
	}

}

function draw() {
  clear();
  //noStroke();

	scale(1);
	stroke(0,100,100);
	fill(180,100,100);
	//print(p_array[0].x, p_array[0].y, p_array[0].r, p_array[0].r);
	//point(p_array[0].x, p_array[0].y, p_array[0].r, p_array[0].r);
	/*
	for(let p of p_array){
		//nostroke();
		point(p.x, p.y);
	}
	*/

	for(var i = 0; i < pn; i++){
		for(var j=i+1; j < pn; j++){
			distance = Math.sqrt((p_array[i].x - p_array[j].x)**2 + (p_array[i].y - p_array[j].y)**2)
			if (distance < close) {
				stroke(-distance/close*270+330, -(distance/close-1)*100, 100, -(distance/close-1)*100+90);
				strokeWeight(-(distance/close-1)*100.0);
				line(p_array[i].x, p_array[i].y, p_array[j].x, p_array[j].y);
			}
		}
	}

	for(var p of p_array){
		p.x = p.x + p.vel_x/fr;
		p.y = p.y + p.vel_y/fr;
		if (windowWidth < p.x  || p.x < 0) {
			p.vel_x = p.vel_x*(-1);
		}
		if (windowHeight < p.y  || p.y < 0) {
			p.vel_y = p.vel_y*(-1);
		}
	}
}

function mouseClicked(){

}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
