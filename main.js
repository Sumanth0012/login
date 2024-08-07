x = parseInt(Math.random()*20.99)

p = document.getElementsByTagName('input')[0].value
document.getElementById("demo").innerHTML = `<h1>GAME</h1><h2>Guess a Number Between 0 and 20</h2>{p}`;