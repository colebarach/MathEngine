class Equation {
  constructor(variable=0, exponents=1, multiplicands=1, addends=0) {
    this.variable = variable;
    this.exponents = exponents;
    this.multiplicands = multiplicands;
    this.addends = addends;
  }
  
  evaluate(x) {
    var y;
    switch(typeof(this.variable)) {
      case 'number':
        y = this.variable;
        break;
      case 'string':
        y = this.evaluateVariable(this.variable,x);
        break
      case 'object':
        y = this.variable.evaluate(x);
        break;
    }
    if(Array.isArray(this.exponents)) {
      for(let i = 0; i < this.exponents.length; i++) {
        y = this.exponentiate(this.exponents[i],x,y);
      }
    } else {
      y = this.exponentiate(this.exponents,x,y);
    }
    if(Array.isArray(this.multiplicands)) {
      for(let i = 0; i < this.multiplicands.length; i++) {
        y = this.multiply(this.multiplicands[i],x,y);
      }
    } else {
      y = this.multiply(this.multiplicands,x,y);
    }
    if(Array.isArray(this.addends)) {
      for(let i = 0; i < this.addends.length; i++) {
        y = this.add(this.addends[i],x,y);
      }
    } else {
      y = this.add(this.addends,x,y);
    }
    return y;
  }
  
  evaluateVariable(variable,x) {
    switch(variable) {
      case 'x':
        return x;
      case 'sin':
        return sin(x);
      case 'cos':
        return cos(x);
      case 'sec':
        return 1/cos(x);
      case 'csc':
        return 1/sin(x);
      case 'tan':
        return tan(x);
      case 'cot':
        return 1/tan(x);
      case 'ln':
        return log(x);
      default:
        return null;
    }
  }
  exponentiate(exponent,x,y) {
    if(typeof(exponent) == 'object') {
      y = pow(y,exponent.evaluate(x));
    } else {
      y = pow(y,exponent);
    }
    return y;
  }
  multiply(multiplicand,x,y) {
    if(typeof(multiplicand) == 'object') {
      y *= multiplicand.evaluate(x);
    } else {
      y *= multiplicand;
    }
    return y;
  }
  add(addend,x,y) {
    if(typeof(addend) == 'object') {
      y += addend.evaluate(x);
    } else {
      y += addend;
    }
    return y;
  }
  
  copy() {
    return new Equation(this.variable,this.exponents,this.multiplicands,this.addends);;
  }
}