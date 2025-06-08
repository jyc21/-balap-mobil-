

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const car = {
  x: 175,
  y: 500,
  width: 50,
  height: 100,
  color: "red",
  speed: 5
};
function drawCar() {
  ctx.save();
  ctx.shadowColor = '#ff0';
  ctx.shadowBlur = 18;
  ctx.fillStyle = car.color;
  ctx.fillRect(car.x, car.y, car.width, car.height);
  ctx.restore();
}
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function update() {
  clearCanvas();
  drawCar();
  requestAnimationFrame(update);
}
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft" && car.x > 0) {
    car.x -= car.speed;
  } else if (e.key === "ArrowRight" && car.x < canvas.width - car.width) {
    car.x += car.speed;
  }
});
update();