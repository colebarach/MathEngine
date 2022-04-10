var Theme = {
  backgroundColor: 0,
  strokeColor:     255,
  strokeWeight:    0.02,
  xAxisColor:      [255,128,128],
  yAxisColor:      [128,255,128],
  tickScale:       [1,0.5],
  defaultScale:    4,
  dotScale:        0.01,
  
  apply() {
    background(this.backgroundColor);
    stroke(this.strokeColor);
    strokeWeight(this.strokeWeight);
  }
}