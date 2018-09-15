class SmartCalculator {
  constructor(initialValue) {
	this.operations = [initialValue]
  }

  add(number) {
	this.operations.push('+',number)
	return this;
  }
  
  subtract(number) {
	this.operations.push('-',number)
	return this;
  }

  multiply(number) {
	this.operations.push('*',number)
	return this;
  }

  devide(number) {
	this.operations.push('/',number)
	return this;
  }

  pow(number) {
	this.operations.push('^',number)
	return this;
  }

  toString() {
  	while(this.operations.lastIndexOf('^') != -1){
  		let index = this.operations.lastIndexOf('^');
  		this.operations.splice(index-1,3,this.operations[index-1]**this.operations[index+1])
  	}
  	while(this.operations.indexOf('*') != -1){
  		let index = this.operations.indexOf('*');
  		this.operations.splice(index-1,3,this.operations[index-1]*this.operations[index+1])
  	}
  	while(this.operations.indexOf('/') != -1){
  		let index = this.operations.indexOf('/');
  		this.operations.splice(index-1,3,this.operations[index-1]/this.operations[index+1])
  	}
   	while(this.operations.indexOf('-') != -1){
  		let index = this.operations.indexOf('-');
  		this.operations.splice(index-1,3,this.operations[index-1]-this.operations[index+1])
  	}
    while(this.operations.indexOf('+') != -1){
  		let index = this.operations.indexOf('+');
  		this.operations.splice(index-1,3,this.operations[index-1]+this.operations[index+1])
  	}

	return this.operations[0] 
  }
 
}

module.exports = SmartCalculator;