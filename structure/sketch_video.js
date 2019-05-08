var capture;
var nx = 90;
var ny = 60;
var tile;
var index;
var colour;
var greyscale;
var trans;
var mode = 0;
var count = 0;
var framecount = 0;
var alphabet = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');

function preload(){
	capture = createCapture(VIDEO);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB);
  clear();
	noStroke();
  frameRate(24);
  capture.size(2*nx, 2*ny);
  capture.hide();
  background(0);
  capture.loadPixels();

  if(windowWidth/nx < windowHeight/ny){
    tile = windowWidth/nx;
	}
	else{
		tile = windowHeight/ny;
	}
  trans = (windowWidth-nx*tile)*0.5;
  console.log(nx, ny, tile, trans);
}

function draw() {
  background(0);
  framecount = framecount + 0.25;
  for(var i = 0; i < nx; i++){
    for(var j = 0; j < ny; j++){
      colorMode(RGB);
      colour = color(capture.get(i, j));
      greyscale = round(red(colour)*0.222+green(colour)*0.707+blue(colour)*0.071);
      rectMode(CORNER);
      if(mode == 0){
				noStroke();
        ellipse(tile*i+trans, tile*(j), tile*greyscale/150.0*4*(mouseX/windowWidth-0.5), tile*greyscale/150.0*4*(mouseY/windowHeight-0.5));
        fill(red(colour), green(colour), blue(colour), 150);
      }
      if(mode == 1){
        ellipse(tile*i+trans, tile*(j), tile*greyscale/150.0*4*(mouseX/windowWidth-0.5), tile*greyscale/150.0*4*(mouseY/windowHeight-0.5));
        colorMode(HSB, 360, 100, 100, 100);
        fill(framecount%360,70,70);
      }
      if(mode == 2){
        ellipse(tile*i+trans, tile*(j), tile*greyscale/150.0*4*(mouseX/windowWidth-0.5), tile*greyscale/150.0*4*(mouseY/windowHeight-0.5));
        colorMode(HSB, 360, 100, 100, 100);
        fill(0,0,100);
      }
      else if(mode == 3){
        rect(tile*i+trans, tile*(j), tile*greyscale/150.0*4*(mouseX/windowWidth-0.5), tile*greyscale/150.0*4*(mouseY/windowHeight-0.5));
        fill(red(colour), green(colour), blue(colour), 150);
      }

      if(mode == 4){
        rect(tile*i+trans, tile*(j), tile*greyscale/150.0*4*(mouseX/windowWidth-0.5), tile*greyscale/150.0*4*(mouseY/windowHeight-0.5));
        colorMode(HSB, 360, 100, 100, 100);
        fill(framecount%360,70,70,150);
      }
      else if(mode == 5){
        rect(tile*i+trans, tile*(j), tile*greyscale/150.0*4*(mouseX/windowWidth-0.5), tile*greyscale/150.0*4*(mouseY/windowHeight-0.5));
        colorMode(HSB, 360, 100, 100, 100);
        fill(0,0,100);
      }
			if(mode == 6){
				stroke(0,255,0);
				if(Math.random() < 0.05){
					fill(255,255,255);
				}
				else{
					fill(0,255,0);
				}
				textAlign(CENTER);
				textSize(14);
				if(red(colour)+green(colour)+blue(colour) < 255*0.5*3){
					if(Math.random() < 0.5){
						text(alphabet[int(Math.random()*25)], tile*i+trans, tile*(j));
					}
				}
      }
    }
  }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked(){
  count = count + 1;
  mode = count%7;
  console.log(count, mode);
}
