let j;
function setup() {
  createCanvas(600,300)
  background(20)

  y=100;
  x=190;
  k=117;
  l=207;
  
  j=0;
}

function draw() {
  background(20)
  line(299,0,299,299)

  strokeWeight(1)
  fill(240,128,128)
  ellipse(100,200,50,50)
  ellipse(190,200,50,50)

  strokeWeight(15)
  stroke(240,128,128)
  line(207,100,120,100);
  strokeJoin(ROUND);
  strokeCap(ROUND);
  line(117,100,117,200);
  line(207,100,207,200);

  //gerak
  strokeWeight(1)
  fill(240,128,128)
  var y = 400 + 10 * Math.sin(PI/150*j)
  j+=1
  ellipse(y,200,50,50)
  var x = 490 + 10 * Math.sin(PI/150*j)
  j+=1
  ellipse(x,200,50,50)

  strokeWeight(15)
  stroke(240,128,128)
  line(507,100,420,100);
  strokeJoin(ROUND);
  strokeCap(ROUND);
  var k = 417 + 10 * Math.sin(PI/150*j)
  j+=1
  line(417,100,k,200);
  var l = 507 + 10 * Math.sin(PI/150*j)
  j+=1
  line(507,100,l,200);
}
