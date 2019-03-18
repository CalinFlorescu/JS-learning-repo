var direction = `west`
var snake = []
snake[0] = {x: 4, y: 4}
var fruitX = 4
var fruitY = 0
var score = 0

function keyPress (event){
    switch (event.keyCode){
        case 65: direction = `west`; break;
        case 87: direction = `north`; break;
        case 83: direction = `south`; break;
        case 68: direction = `east`; break;
    }
    console.log(direction);
}

document.querySelector(`.startButton`).addEventListener(`click`, () => {

    let table;
    table = [[0, 0, 0, 0, 2, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],];

    document.addEventListener(`keydown`, keyPress)
    window.setInterval(() => {
        game(table,direction)
        draw(table)
    },1000/4)
});

function game(table, direction) {
    let xSpeed
    let ySpeed
    xSpeed = 0
    ySpeed = 0
    switch (direction) {
        case `north`: ySpeed = -1; xSpeed = 0; break;
        case `south`: ySpeed = 1; xSpeed = 0; break;
        case 'west': ySpeed = 0; xSpeed =  -1; break;
        case `east`: ySpeed = 0; xSpeed = 1; break;
    }

    table[snake[snake.length-1].y][snake[snake.length -1].x] = 0

    for(let i = snake.length-1; i > 0; i--) {
        snake[i].x = snake[i-1].x
        snake[i].y = snake[i-1].y
        table[snake[i].y][snake[i].x] = 1;
    }

    snake[0].x += xSpeed
    snake[0].y += ySpeed

   if(snake[0].x < 0 || snake[0].y > 8 || snake[0].y < 0 || snake[0].x > 8 || table[snake[0].y][snake[0].x] === 1) {
       alert(`Game Over! Final score is ${score}`)
   } else {
       table[snake[0].y][snake[0].x] = 1;

       if(snake[0].y === fruitY && snake[0].x === fruitX) {
           snake[snake.length]=({x: snake[snake.length-1].x - xSpeed, y: snake[snake.length-1].y - ySpeed})
           document.querySelector(`.score-value`).innerText = ++score;
           generateFruit(table)
           console.log(snake)
       }
   }
}

function draw(table) {

    for (let i = 0; i < table.length; i++) {
        for (let j = 0; j < table.length; j++) {
            if (table[i][j] === 0) {
                document.querySelector(`.pos${i}${j}`).style.backgroundColor = `black`
                document.querySelector(`.pos${i}${j}`).style.borderRadius = `0px`
            } else if (table[i][j] === 2) {
                document.querySelector(`.pos${i}${j}`).style.backgroundColor = `red`
                document.querySelector(`.pos${i}${j}`).style.borderRadius = `0px`
            } else if (table[i][j] === 1) {
                document.querySelector(`.pos${i}${j}`).style.backgroundColor = "white"
                document.querySelector(`.pos${i}${j}`).style.borderRadius = `10px`
            }
        }
    }
}

function generateFruit(table) {
    fruitX = Math.floor((Math.random() * 8) + 0)
    fruitY = Math.floor((Math.random() * 8) + 0)
    table[fruitY][fruitX] = 2
}
