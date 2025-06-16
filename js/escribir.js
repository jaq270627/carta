const texto = `Hola mi amor,

Primero que nada me gustaría agradecerte por todo lo que haces por mí. Este camino que recorremos juntos no ha sido fácil, y no lo digo por lo que sentimos, sino por todo aquello que a veces nos asusta: el tiempo, la distancia, y las adversidades que enfrentamos.

Espero que siempre tengamos la fuerza de resolver todo lo que se cruce en nuestro camino por más difícil que sea. Ojalá todo fuera solo risas y buenos momentos, pero sabemos que la vida también tiene días grises.

Te amo muchísimo, mucho más de lo que un día imaginé volver a amar a alguien. Siempre estaré para ti, cuando más y cuando menos me necesites.

❤️ Te amo mucho.`;

let i = 0;

function escribir() {
  if (i < texto.length) {
    const char = texto.charAt(i);
    document.getElementById("mensaje").innerHTML += char === "\n" ? "<br>" : char;
    i++;
    setTimeout(escribir, 40); // velocidad
  }
}

window.addEventListener("load", escribir);
