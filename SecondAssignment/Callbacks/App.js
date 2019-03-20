function myForEach (arr, callback) {
    for(let i = 0; i < arr.length; i++) {
        callback(arr[i], i, this);
    }
}

console.log(myForEach([1,2,3,4]));