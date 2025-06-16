document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('playAudio');
  
    const audio = new Audio('audio/fondo.mp3');
    audio.loop = true;
  
    boton.addEventListener('click', () => {
      if (audio.paused) {
        audio.play();
        boton.textContent = '💖 Reproduciendo...';
      } else {
        audio.pause();
        boton.textContent = '💖 Picale y escucha';
      }
    });
  });
  