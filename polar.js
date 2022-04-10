function polarToCartesian(p) {
  x = p.x*cos(p.y);
  y = p.x*sin(p.y);
  return createVectorO(x,y);
}
function cartesianToPolar(p) {
  radius = sqrt(p.x*p.x+p.y*p.y);
  theta = atan(p.y/p.x);
  if(p.x < 0) theta += Math.PI;
  return createVectorO(radius,theta)
}

function graphPolarCartesianInterpolation(equation, value, resolution=width, iterations=1,rendering="curve") {
  plot = [];
  for(let t = -resolution/2; t <= resolution/2; t++) {
    theta = 2*PI*iterations*t/resolution;
    radius = equation.evaluate(theta);
    
    polar = createVectorO(radius,theta);
    cartesian = cartesianToPolar(createVectorO(theta,radius));
    
    plot.push(polarToCartesian(polar.mult(value).add(cartesian.mult(1-value))));
  }
  graphPlot(plot,rendering)
}