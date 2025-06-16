const texto = "Desde que llegaste a mi vida, todo cambió. 💌\nCada día contigo es un regalo que valoro con el alma. ❤️\nGracias por existir. Te amo infinitamente.";
let i = 0;

function escribir() {
  if (i < texto.length) {
    const char = texto.charAt(i);
    document.getElementById("mensaje").innerHTML += char === "\n" ? "<br>" : char;
    i++;
    setTimeout(escribir, 60);
  }
}

window.addEventListener("load", escribir);

