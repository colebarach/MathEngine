// function graphNew(eq,u) {
//   pPrime = createVector(0,0);
  
//   for(let t = 0; t < width; t++) {
//     x = pixelToCartesian(t,0).x;
//     y = eq.evaluate(x);
//     theta = x;
//     radius = eq.evaluate(theta);
    
//     v = 1-u;
    
//     polar = createVector(radius,theta);
//     cartesian = createVector(x,y);
    
//     p = polarToCartesian((polar.mult(u)).add(cartesianToPolar(cartesian).mult(v)));
    
//     if(t != 0 && dist(p.x,p.y,pPrime.x,pPrime.y) < 32) {
//       line(p.x,p.y,pPrime.x,pPrime.y);
//     }
    
//     pPrime = p.copy();
//   }
// }

// function graphFunctionallyPolar(eq) {
//   pPrime = createVector(0,0);
  
//   for(let t = 0; t < width; t++) {
//     theta = 2*Math.PI*t/width - Math.PI;
//     radius = eq.evaluate(theta);
    
//     polar = createVector(radius,theta);
    
//     p = polarToCartesian(polar);
    
//     if(t != 0) {
//       line(p.x,p.y,pPrime.x,pPrime.y);
//     }
     
//     pPrime = p.copy();
//   }
// }
