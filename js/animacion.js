window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const img = new Image();
  img.src = "img/corazon.png"; // Asegúrate de que esta ruta exista

  const hearts = [];

  class Heart {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = canvas.height + Math.random() * 100;
      this.size = Math.random() * 20 + 20;
      this.speedY = Math.random() * 1 + 0.5;
      this.opacity = Math.random() * 0.5 + 0.5;
    }

    update() {
      this.y -= this.speedY;
      if (this.y < -this.size) {
        this.y = canvas.height + this.size;
        this.x = Math.random() * canvas.width;
      }
    }

    draw() {
      ctx.globalAlpha = this.opacity;
      ctx.drawImage(img, this.x, this.y, this.size, this.size);
      ctx.globalAlpha = 1;
    }
  }

  function init() {
    for (let i = 0; i < 100; i++) {
      hearts.push(new Heart());
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hearts.forEach(heart => {
      heart.update();
      heart.draw();
    });
    requestAnimationFrame(animate);
  }

  img.onload = () => {
    init();
    animate();
  };
});
