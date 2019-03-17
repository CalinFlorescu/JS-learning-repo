
function power(num) {
    return num * num;
}

function newNumber(num){
    let a = ``;
    while(num > 0){
        a = power(num % 10) + a;
        num = Math.floor(num / 10);
    }
    let number = parseInt(a);
    return number;
}

console.log(newNumber(24));