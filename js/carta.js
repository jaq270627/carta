document.addEventListener('DOMContentLoaded', () => {
    const carta = document.getElementById('carta');
    const tapa = carta.querySelector('.tapa');
  
    tapa.addEventListener('click', () => {
      carta.classList.toggle('abierta');
    });
  });
  