var img;
var nx = 10*1;
var ny = 18*1;
var tile;
var index;
var colour;
var greyscale;
var trans;
var array = [];
var sw = 200.0/nx;

function preload(){
	img = loadImage('fermale.jpg');
}

function setup() {
	noLoop();
  createCanvas(windowWidth, windowHeight);
	background(0);
  colorMode(RGB);
  frameRate(24);
  img.resize(nx, ny);
  img.loadPixels();
  if(windowWidth/nx < windowHeight/ny){
    tile = windowWidth/nx;
	}else{
		tile = windowHeight/ny;
	}
  trans = (windowWidth-nx*tile)*0.5;
  console.log(nx, ny, tile, trans);
}

function draw() {
  background(0);
  for(var i = 0; i < ny; i++){
		array = [];
    for(var j = 0; j < nx; j++){
      colour = color(img.get(j, i));
			clr = color(img.get(j+1, i));
			greyscl = round(red(clr)*0.222+green(clr)*0.707+blue(clr)*0.071);
      greyscale = round(red(colour)*0.222+green(colour)*0.707+blue(colour)*0.071);
			if(greyscale > 50){
				strokeWeight(sw);
				stroke(red(colour), green(colour), blue(colour));
				line(trans + tile*j, tile*i, trans + tile*j + tile, tile*i+tile);
			}else{
				strokeWeight(sw*0.5);
				stroke(red(colour), green(colour), blue(colour));
				line(trans + tile*j, tile*i+tile, trans + tile*j + tile, tile*i);
			}
    }
  }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
