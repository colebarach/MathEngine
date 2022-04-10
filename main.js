var canvas;
var equation;

function setup() {
  createCanvas(800,800);
  aspectRatio = (height/width);
  canvas = new Canvas(-Theme.defaultScale,            Theme.defaultScale,
                      -Theme.defaultScale*aspectRatio,Theme.defaultScale*aspectRatio);
  
  equation = new Equation('sin');
}
function draw() {
  Theme.apply();
  canvas.apply();
  
  canvas.drawAxes();
  canvas.drawTicks();
  
  t = (sin(millis()/1000/2)+1)/2;
  
  graphPolarCartesianInterpolation(equation,t,4096,8,"curve");
}

function graphFunctionally(equation, resolution=width, system="cartesian", rendering="curve", iterations=1) {
  plot = [];
  switch(system) {
    case "cartesian":
      for(let t = 0; t <= resolution; t++) {
        x = canvas.map(t,0,resolution);
        y = equation.evaluate(x);
        plot.push(createVectorO(x,y));
      }
      break;
    case "polar":
      for(let t = 0; t <= resolution; t++) {
        theta =  2*PI*iterations*t/resolution;
        radius = equation.evaluate(theta);
        cartesian = polarToCartesian(createVectorO(radius,theta));
        plot.push(cartesian);
      } 
      break;
    case "polar-":
      for(let t = -resolution/2; t <= resolution/2; t++) {
        theta =  2*PI*iterations*t/resolution;
        radius = equation.evaluate(theta);
        cartesian = polarToCartesian(createVectorO(radius,theta));
        plot.push(cartesian);
      } 
      break;
  }
  graphPlot(plot,rendering);
}
function graphPlot(plot, rendering) {
  switch(rendering) {
    case "curve":   
      for(let p = 1; p < plot.length; p++) {
        line(plot[p].x,plot[p].y,plot[p-1].x,plot[p-1].y);
      }
      break;
    case "scatter":
      for(let p = 0; p < plot.length; p++) {
        ellipse(plot[p].x,plot[p].y,Theme.dotScale,Theme.dotScale);
      }
      break;
    case "curveP":
      for(let p = 1; p < plot.length; p++) {
        if(dist(plot[p].x,plot[p].y,plot[p-1].x,plot[p-1].y) < 64) {
          line(plot[p].x,plot[p].y,plot[p-1].x,plot[p-1].y);
        }
      }
      break;
  }
}

function createVectorO(x,y) {
  vector = createVector(x,y);
  if(isNaN(x)) {
    vector.x = NaN;
  }
  if(isNaN(y)) {
    vector.y = NaN;
  }
  return vector;
}
