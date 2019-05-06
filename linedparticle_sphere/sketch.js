var fr = 60.0;
var pn = 80;
var p_array = [];
var distance;

class Particle{
  constructor(theta, phi, vel_theta, vel_phi){
    this.r = min(windowWidth*0.5, windowHeight*0.5);
		this.theta = theta;
    this.phi = phi;
		this.vel_theta = vel_theta;
		this.vel_phi = vel_phi;
    this.x = this.r*Math.cos(this.phi)*Math.cos(this.theta);
    this.y = this.r*Math.cos(this.phi)*Math.sin(this.theta);
    this.z = this.r*Math.sin(this.phi);
    this.update = function(){
      var timestep = 1.0/fr;
      this.theta = this.theta + this.vel_theta*timestep;
      this.phi = this.phi + this.vel_phi*timestep;
      this.x = this.r*Math.cos(this.phi)*Math.cos(this.theta);
      this.y = this.r*Math.cos(this.phi)*Math.sin(this.theta);
      this.z = this.r*Math.sin(this.phi);
    };
    this.rot_x = function(rad){
      //this.x = this.x;
      return new Array(this.y*Math.cos(rad) - this.z*Math.sin(rad),  this.y*Math.sin(rad) + this.z*Math.cos(rad));
      //this.z = this.y*Math.sin(rad) + this.z*Math.cos(rad);

    }
    this.rot_y = function(rad){
      this.x = this.x;
      this.y = this.y*Math.cos(rad) - this.z*Math.sin(rad);
      this.z = this.y*Math.sin(rad) + this.z*Math.cos(rad);
    }
    this.rot_z = function(rad){
      this.x = this.x;
      this.y = this.y*Math.cos(rad) - this.z*Math.sin(rad);
      this.z = this.y*Math.sin(rad) + this.z*Math.cos(rad);
    }
  }
};

function setup() {
	createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 255);
  frameRate(fr);
  background(0);
  var a = 2*Math.PI*Math.random();
  var b = 2*Math.PI*Math.random();

	for (var i = 0; i < pn; i++){
		p_array.push(new Particle(2*Math.PI*Math.random(), 2*Math.PI*Math.random(), (0.2*Math.PI*Math.random()), (0.2*Math.PI*Math.random())));
    //p_array.push(new Particle(0.5*Math.PI, 0, (0.3*Math.PI), (0.0*Math.PI)));
	}
  //rotateX(0.25*Math.PI);
}

function draw() {
  background(0);
  var close = min(windowWidth*0.5, windowHeight*0.5)*0.7;
  //clear();
	stroke(0,0,40);
	fill(180,100,100);
  for(let p of p_array){
		p.rot_x(0.25*Math.PI/fr);
	}
  /*
	for(let p of p_array){
    strokeWeight(10.0);
		point(p.y + windowWidth*0.5, p.z + windowHeight*0.5);
	}
  */

  for(let p of p_array){
		p.update();
	}

	for(var i = 0; i < pn; i++){
		for(var j=i+1; j < pn; j++){
			distance = Math.sqrt((p_array[i].x - p_array[j].x)**2 + (p_array[i].y - p_array[j].y)**2 + (p_array[i].z - p_array[j].z)**2)
			if (distance < close) {
				stroke(-distance/close*270+330, -(distance/close-1)*100, 100, -(distance/close-1)*100+70);
        //stroke(-distance/close*270+330, 0, -(distance/close-1)*100, -(distance/close-1)*100+90);
				strokeWeight(((p_array[i].z+p_array[i].z)*0.5 + p_array[i].r*0.5)/p_array[i].r*4.0);
				line(p_array[i].rot_x(0.25*Math.PI)[0]+windowWidth*0.5, p_array[i].rot_x(0.25*Math.PI)[1]+windowHeight*0.5, p_array[j].rot_x(0.25*Math.PI)[0]+windowWidth*0.5, p_array[j].rot_x(0.25*Math.PI)[1]+windowHeight*0.5);
			}
		}
	}
}

function mouseClicked(){
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
