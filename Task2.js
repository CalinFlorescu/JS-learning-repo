var a = [];
function matrixIt(rows, cols, a) {
    a[rows] = ``;
    for(let i = rows - 1; i > 0 ; i--) {
        a[rows] += ` `;
    }
    for(let i = 0; i < (cols - 2 * (rows - 1)); i++) {
        a[rows] += `*`;
    }
    for(let i = rows - 1; i > 0 ; i--) {
        a[rows] += ` `;
    }
        console.log(a[rows]);
    if(rows === 1) {
        
    } else {
        matrixIt(--rows, cols, a);
    }
}

matrixIt(6, (1 + 2 * (6 - 1)), a);

