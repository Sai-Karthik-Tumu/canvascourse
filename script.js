const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;

// // fillRectangle
// ctx.fillStyle = 'red';
// ctx.fillRect(20, 20, 150, 100)


// // strokeRectangle
// ctx.lineWidth = 5;
// ctx.strokeStyle = 'green';
// ctx.strokeRect(100, 200, 150, 100)

// // clearRectangle
// ctx.clearRect(25, 25, 140, 90)

// Paths
console.log("hi")
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
ctx.lineTo(100, 200);
ctx.moveTo(50, 50);
ctx.fillStyle = 'coral';
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(200, 50);
ctx.lineTo(150, 200);
ctx.stroke();
ctx.closePath();
