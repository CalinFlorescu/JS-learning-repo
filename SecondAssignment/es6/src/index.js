import MyPromise from './MyPromise';
import MyValidator from './MyValidator';

//
// const promiseTest = () => {
//     const foo = () => new MyPromise((r) => r('test'));
//     foo().then((p) => {
//         throw new Error(`error in then ${p}`);
//     }).catch(console.log);
//
//     const bar = () => new MyPromise((r, reject) => reject('test'));
//     bar().catch(console.log);
//
//     const fooBar = () => new Promise(r => r({a: 'obj test'}));
//     fooBar().then(obj => obj.a).then(console.log);
//
//     MyPromise.test([1, 2, 3, 4]);
// };
//
// const asyncTest = async () => {
//     const foo = async () => {
//         return "async test";
//     };
//
//     console.log(await foo());
// };
//
// // promiseTest();
// // asyncTest();
//

import fetch from 'node-fetch';

const body = {text: 'test'};
fetch('http://localhost:3000/note', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(body),
}).then(r => r.json()).then(console.log).catch(e => console.log(e));


// My forEach

/*function myForEach(arr, callback) {
    for(let i = 0; i < arr.length; i++)
        callback(arr[i], i, arr)
}

 myForEach([1,2,3,4], console.log);*/

// My filter

/*function myFilter(arr, callback) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i],i,arr)) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(myFilter([1,2,3,4,5,6], cur => {
    if(cur % 2 === 0) {
        return true;
    } else {
        return false;
    }
}));*/

// My map

/*function myMap(arr, callback) {
    let newArray = [];
    for(let i = 0; i < arr.length; i++) {
        newArray.push(callback(arr[i], i ,arr));
    }
    return newArray;
}

console.log(myMap([1,2,3,4,5], cur => {
    return cur * 2;
}));*/

// My sort

/*function mySort(arr, callback = (el,index,arr)=> {
    if(arr[index] > arr[index+1]) {
        return true;
    } else {
        return false;
    }
}) {
    var swapp;
    var n = arr.length-1;
    var x=arr;
    do {
        swapp = false;
        for (var i=0; i < n; i++)
        {
            if (callback(arr[i], i, arr))
            {
                var temp = x[i];
                x[i] = x[i+1];
                x[i+1] = temp;
                swapp = true;
            }
        }
        n--;
    } while (swapp);
    return x;
}

console.log(mySort([5,4,3,2,1]));*/

//Promises

/*const promise = new MyPromise(() => {setTimeout(() => {console.log(`Coso`)}),2000});
const promise1 = new MyPromise(() => {setTimeout(console.log),2000});
const p = [];
p[0] = promise;
p[1] = promise1;
MyPromise.all(p);
promise.then(() => {console.log(`Haloe`)});*/

//Async Await

/*const fs = require('fs');
const readline = require('readline');


(async function readFromLine() {
    async function asyncReadLine(filename) {
        return new Promise ((resolved,rejected) => {
                let string = [];
                const rl = readline.createInterface({
                    input: fs.createReadStream(filename),
                    crlfDelay: Infinity
                });

                rl.on('line', (line) => {
                    string.push(line);
                });
                rl.on('close', () => {
                    resolved(string);
                });
            }
        )
    }

    (await asyncReadLine(`big-file.txt`)).forEach(line => {
        console.log(line);
    })
})();*/

// Errors

/*const element = new MyValidator('0');

element.isNumber();*/

// Fetch











