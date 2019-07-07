var img;
var oimg;
var nx = 20;
var ny = 36;
var tile;
var colour;
var greyscale;
var trans;
var sw = 200.0/nx;

function preload(){
	oimg = loadImage('fermale.jpg');
}

function setup() {
	noLoop();
  createCanvas(windowWidth, windowHeight, SVG);
	background(0);
  colorMode(RGB);
  frameRate(1);
  //img.resize(nx, ny);
  //img.loadPixels();
	/*
  if(windowWidth/nx < windowHeight/ny){
    tile = windowWidth/nx;
	}else{
		tile = windowHeight/ny;
	}
  trans = (windowWidth-nx*tile)*0.5;
	*/
}

function draw() {
	background(0);
	img = Object.assign(oimg);
	//img = oimg.concat();
	nx = 20*1.5*0.5;//nx+1;//*frameCount/100+5;
	ny = 36*1.5*0.5;//ny+1.8;//*frameCount/100+9;
	sw = 200.0/nx*1.3;
  img.resize(nx, ny);
  img.loadPixels();
  if(windowWidth/nx < windowHeight/ny){
    tile = windowWidth/nx;
	}else{
		tile = windowHeight/ny;
	}
  trans = (windowWidth-nx*tile)*0.5;

  //background(0);
  for(var i = 0; i < ny; i++){
    for(var j = 0; j < nx; j++){
      colour = color(img.get(j, i));
			clr = color(img.get(j+1, i));
			greyscl = round(red(clr)*0.222+green(clr)*0.707+blue(clr)*0.071);
      greyscale = round(red(colour)*0.222+green(colour)*0.707+blue(colour)*0.071);
			if(greyscale > 70){
				strokeWeight(sw);
				stroke(red(colour), green(colour), blue(colour));
				line(trans + tile*j, tile*i, trans + tile*j + tile, tile*i+tile);
			}else{
				strokeWeight(sw*0.1);
				stroke(red(colour), green(colour), blue(colour));
				line(trans + tile*j, tile*i+tile, trans + tile*j + tile, tile*i);
			}
    }
  }
	//save("mySVG.svg");      // give file name
	//print ("saved svg");
}



function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
