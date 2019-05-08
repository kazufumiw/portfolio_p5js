var img;
var nx = 10;
var ny = 18;
var tile;
var index;
var colour;
var greyscale;
var trans;
var mode = 0;
var count = 0;
var framecount = 0;
var alphabet = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
var array = [];

function preload(){
	img = loadImage('fermale.jpg');
}

function setup() {
	noLoop();
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB);
  clear();
	stroke(255,255,255);
  frameRate(24);
  img.resize(nx, ny);
  //img.hide();
  background(0);
  img.loadPixels();

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
  for(var i = 0; i < ny; i++){
		array = [];
    for(var j = 0; j < nx; j++){
      colorMode(RGB);
      colour = color(img.get(j, i));
			clr = color(img.get(j+1, i));
			greyscl = round(red(clr)*0.222+green(clr)*0.707+blue(clr)*0.071);
      greyscale = round(red(colour)*0.222+green(colour)*0.707+blue(colour)*0.071);
			if(greyscale > 50){
				strokeWeight(10);
				stroke(red(colour), green(colour), blue(colour));
				line(trans + tile*j, tile*i, trans + tile*j + tile, tile*i+tile);
			}else{
				strokeWeight(6);
				stroke(red(colour), green(colour), blue(colour));
				//stroke(255,255,255);
				line(trans + tile*j, tile*i+tile, trans + tile*j + tile, tile*i);
			}




			//array.push(greyscale);


			/*
			rectMode(CORNER);
      if(mode == 0){
				noStroke();
        ellipse(tile*i+trans, tile*(j), tile*greyscale/150.0*4*(mouseX/windowWidth-0.5), tile*greyscale/150.0*4*(mouseY/windowHeight-0.5));
        fill(red(colour), green(colour), blue(colour), 150);
      }
			*/
    }
		/*
		print(array);

		for(var t = 0; t < nx-1; t++){
			line(trans + tile*t, tile*i + 0.03*array[t]*Math.sin(array[t]), trans + tile*(t + 1), tile*i + Math.sin(array[t+1]))
		}
		*/
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
