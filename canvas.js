const canvas = document.getElementById('myCanvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

canvas.style.backgroundColor = "gray";

function move(color,i,j){
    ctx.arc(i, j, 50, 0, Math.PI * 2, false);
    ctx.fillStyle = color;
    ctx.fill();
}

    for(let i=50 ; i<500 ; i++){
        move("red",i,i);
        setTimeout(async() => {
            await console.log("HI");
        }, 2000);
    }

