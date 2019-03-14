function plus(right){
    
    return function (left) {return left + right};
    
}

function minus(right){
    
    return function (left) {return left - right};
    
}

function divide(right){
    
    return function (left) {return Math.floor(left / right)};
    
}

function times(right){
    
    return function (left) {return left * right};
    
}

function calcNum(num, func) {
  if (!func) {
		return num;
	} else {
		return func(num);
	}
}

function one(func){
    return calcNum(1,func);
}

function two(func){
    return calcNum(2,func);
}

function three(func){
    return calcNum(3,func);
}

function four(func){
    return calcNum(4,func);
}

function five(func){
    return calcNum(5,func);
}

function six(func){
    return calcNum(6,func);
}

function seven(func){
    return calcNum(7,func);
}

function eight(func){
    return calcNum(8,func);
}

function nine(func){
    return calcNum(9,func);
}

console.log(two(times(two())));