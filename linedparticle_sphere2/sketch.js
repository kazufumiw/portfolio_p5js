var fr = 60.0;
var pn = 80;
var p_array = [];
var distance;
var sc = 30;
var n = 20;

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(HSB, 360, 100, 100, 255);
  frameRate(fr);
  background(0);
	}

function draw(){
  clear();
  background(360, 0, 100);
  stroke(360,100,0);
	fill(360,0,50);
  //rotateX(frameCount*0.01);
  //rotateY(frameCount*0.01);
  /*
  for(var i = 0; i < n; i++){
    translate(-windowWidth*0.5,0,i*sc)
    for(var j = 0; j < n; j++){
      push();
      translate(sc, 0, 0);
      box(1*sc, 4*sc, 1*sc);
    }
    pop()
    //rotateX(0.01*frameCount);
    rotateX(0.5);
  }
  */
  translate(0,0,-2*sc)
  rotateX(-0.2*Math.PI);
  rotateY(0.253*Math.PI);
  translate(-0.5*n*sc,0,-0.5*n*sc);
  //line(0,0,0,100,0,0);

  point(0,0,0);
  for(var i = 0; i < n; i++){
    push();
    translate(0,0,i*sc);
    for(var j = 0; j < n; j++){

      var a = Math.sin(0.03*frameCount+0.02*((i-0.5*(n-1))**2+(j-0.5*(n-1))**2));
      //fill(360,0,30*a+70,30);
      fill(210+10*a,60,85,40+30*a);

      //noFill();
      stroke(210+10*a,60,85);
      box(sc,a*10*sc,sc);
      translate(sc,0,0);
    }
    pop();
  }
}


function mouseClicked(){
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
