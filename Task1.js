
function persistence(num, count){
    let prod = 1;
    while(num > 0) {
        prod *= num % 10;
        num = Math.floor(num/10);
    }
    if(10 - prod <= 0) {
        persistence(prod, ++count);
    } else
        console.log(count);
}

persistence(39, 1);
