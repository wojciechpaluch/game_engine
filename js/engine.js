const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1200;
canvas.height = 600;

const cw = canvas.width;
const ch = canvas.height;

const speed = 25;


const playerSize = 100;
let playerX = 30;
let playerY = 30;

const orbSize = 55;
let orbX = cw / 2;
let orbY = ch / 2;


function orb() {
    ctx.fillStyle = 'white';
    ctx.fillRect(orbX, orbY, orbSize, orbSize);

}

function map() {
    ctx.fillStyle = 'darkblue';
    ctx.fillRect(0, 0, cw, ch);
}

function player() {
    ctx.fillStyle = 'red';
    ctx.fillRect(playerX, playerY, playerSize, playerSize);

    if (playerY <= 0) {
        playerY = 0;
    }
    if (playerX <= 0) {
        playerX = 0;
    }
    if (playerY > 600) {
        playerY = 600 - playerSize;
    }
    if (playerX > 1200) {
        playerX = 1200 - playerSize;
    }
}



window.addEventListener('keydown', function (event) {
    switch (event.keyCode) {
        case 37:
            playerX -= speed;
            console.log('Lewo');
            break;

        case 38:
            playerY -= speed;
            console.log('Góra');
            break;

        case 39:
            playerX += speed;
            console.log('Prawo');
            break;

        case 40:
            playerY += speed;
            console.log('Dół');
            break;
    }
}, false);

function game() {
    map();
    orb();
    player()
}

game();
setInterval(game, 5 / 5);