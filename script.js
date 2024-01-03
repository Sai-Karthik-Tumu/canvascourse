const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
document.addEventListener('DOMContentLoaded', function () {
    var coordinatesDiv = document.getElementById('coordinates');
  
    canvas.addEventListener('mousemove', function (event) {
      // Get the mouse coordinates relative to the canvas
      var mouseX = event.clientX - canvas.getBoundingClientRect().left;
      var mouseY = event.clientY - canvas.getBoundingClientRect().top;
  
      // Display the coordinates
      coordinatesDiv.textContent = 'Mouse Coordinates: (' + mouseX + ', ' + mouseY + ')';
    });
  });

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
// console.log("hi")
// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 50);
// ctx.lineTo(100, 200);
// ctx.moveTo(50, 50);
// ctx.fillStyle = 'coral';
// ctx.fill();
// ctx.closePath();

// ctx.beginPath();
// ctx.moveTo(200, 50);
// ctx.lineTo(150, 200);
// ctx.stroke();
// ctx.closePath();

// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(100, 100);
// ctx.lineTo(150, 50);
// ctx.closePath();
// ctx.strokeStyle = 'red';
// ctx.stroke();

// // Path 2
// // ctx.beginPath();
// ctx.arc(200, 100, 30, 0, Math.PI * 2);
// ctx.closePath();
// ctx.strokeStyle = 'blue';
// ctx.stroke();

// // Path 3
// // ctx.beginPath();
// ctx.rect(250, 50, 50, 50);
// ctx.closePath();
// ctx.strokeStyle = 'green';
// ctx.stroke();

// Path 1
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(100, 100);
ctx.lineTo(150, 50);
ctx.closePath();
ctx.strokeStyle = 'red';
// ctx.strokeStyle = 'blue';
ctx.stroke();

// Reusing the same path without beginPath()
ctx.moveTo(150, 50); // Start from the last point of the previous path
ctx.lineTo(200, 100);
ctx.lineTo(250, 50);
ctx.closePath();
ctx.strokeStyle = 'blue';
ctx.stroke();