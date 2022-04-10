class Canvas {
  constructor(xBoundsL, xBoundsU, yBoundsL, yBoundsU) {
    this.xBounds = createVector(xBoundsL,xBoundsU);
    this.yBounds = createVector(yBoundsL,yBoundsU);
  }
  apply() {
    scale(width/this.xRange(),-height/this.yRange());
    translate(-this.xBounds.x,-this.yBounds.y);
  }
  
  xRange() {
    return this.xBounds.y-this.xBounds.x;
  }
  yRange() {
    return this.yBounds.y-this.yBounds.x;
  }
  
  map(value,lowerBound=0,upperBound=width,axis="x") {
    if(axis == "x") {
      value = (value-lowerBound)*(this.xBounds.y-this.xBounds.x)/(upperBound-lowerBound) + this.xBounds.x;
    } else if(axis == "y") {
      value = (value-lowerBound)*(this.yBounds.y-this.yBounds.x)/(upperBound-lowerBound) + this.yBounds.x;
    }
    return value;
  }
  
  drawAxes() {
    stroke(Theme.xAxisColor);
    line(this.xBounds.x,0,this.xBounds.y,0);
    stroke(Theme.yAxisColor);
    line(0,this.yBounds.x,0,this.yBounds.y);
    stroke(Theme.strokeColor);
  }
  drawTicks() {
    let tickScale =  Theme.tickScale[0];
    let tickHeight = Theme.tickScale[1];
    for(let t = 0; t <= this.xRange()/tickScale; t++) {
      let x = t*tickScale + this.xBounds.x;
      if(x != 0) {
        line(x,-tickHeight/2,x,tickHeight/2);
      }
    }
    for(let t = 0; t <= this.yRange()/tickScale; t++) {
      let y = t*tickScale + this.yBounds.x;
      if(y != 0) {
        line(-tickHeight/2,y,tickHeight/2,y);
      }
    }
  }
}