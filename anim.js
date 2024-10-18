var lyrics = document.querySelector("#lyrics");
var startButton = document.getElementById("startButton");
var audio = document.getElementById("audioElement");

startButton.addEventListener("click", function () {
  // Oculta el botón de inicio
  startButton.style.display = "none";

  // Reproduce el audio después de que el título se oculte (o inmediatamente si el título ya está oculto)
  setTimeout(function () {
    audio.play().catch(function(error) {
      console.log("Error al intentar reproducir el audio: ", error);
    });
  }, 3000); // Puedes ajustar el tiempo según cuándo desaparezca el título
});

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Ay, me he inventado cosas pa' llamar la atención de ti", time: 8 },
  { text: "Y no solo por lo hermosa, niña, tu brillo me tiene así", time: 10 },
  { text: "Y siéntate y piensa en algo, y quiero ser ese algo", time: 16 },
  { text: "Ay, procuré seducirla mucho, hasta que se dio", time: 22 },
  { text: "Flaca, vos sos hermosa, y te mereces todo", time: 25 },
  { text: "Amarte es mi necesidad, mi necesidad", time: 29 },
  { text: "De ti me gustan cosas, la verdad, todo", time: 33 },
  { text: "Quitarte esa inseguridad, es mi necesidad", time: 38 },
  { text: "Es darte un par de besitos'", time: 43 },
  { text: "Es bailar contigo un afrito", time: 44 },
  { text: "Es decir que loquito me tienes ", time: 47 },
  { text: "Es decir a qué huele", time: 49 },
  { text: "Huele rico al bailar", time: 50},
  { text: "Es perfecta al despertarse", time: 53 },
  { text: "Ay, procuré seducirla mucho, hasta que se dio", time: 58 },
  { text: "Flaca, vos sos hermosa, y te mereces todo", time: 63 },
  { text: "Amarte es mi necesidad, mi necesidad", time: 68 },
  { text: "De ti me gustan cosas, la verdad, todo", time: 72 },
  { text: "Quitarte esa inseguridad, es mi necesidad", time: 76 },
  { text: "De verdad", time: 82 },
  { text: "Ay, procuré seducirla mucho, hasta que se dio", time: 85 },
  { text: "Y si supieras todo lo que yo recé a Dios", time: 87 },
  { text: "Pa' que tú estuvieras aquí", time: 90 },
  { text: "Ay, mi flaca hermosa", time: 95 },
  { text: "Vos sos otra cosa", time: 97 },
  { text: "Es el destino que no' tiene feliz", time: 99 },
  { text: "(Bebé, date una idea de que)", time: 104 },
  { text: "Flaca, vos sos hermosa, y te mereces todo", time: 110 },
  { text: "Ay, amarte es mi necesidad, mi necesidad", time: 114 },
  { text: "De ti me gustan cosas, la verdad, todo", time: 119 },
  { text: "(Bebé, date una idea de que)", time: 124 },
  { text: "Flaca, vos sos hermosa (Uwaie), y te mereces todo (Uwaie)", time: 129 },
  { text: "Ay, amarte es mi necesidad, mi necesidad", time: 133 },
  { text: "De ti me gustan cosas (Uwaie), la verdad, todo (Uwaie)", time: 137 },
  { text: "(Uwaie)", time: 144 },
  { text: "Feliz cumpleaños mi heroina hermosa ", time: 150 },
  { text: "Te mereces el mundo entero ", time: 155 },
  { text: "Deseo que seas muy feliz y sonrie que esa sonrisa es Preciosa😍 ", time: 160 },
  { text: "El jueves 24/10/2024 Llegara un detallito de 2:00 pm - 3:00pm 💐  ", time: 165 }
  
];

// Función para actualizar las letras en sincronización con el audio
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    var fadeInDuration = 0.1;
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }

  requestAnimationFrame(updateLyrics); // Mantener la actualización continua
}

// Función para ocultar el título y reproducir el audio automáticamente
function ocultarTituloYReproducirAudio() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards"; // Animación para desaparecer el título
  setTimeout(function () {
    titulo.style.display = "none"; // Ocultar el título completamente
    audio.play(); // Reproducir el audio automáticamente
  }, 3000); // Esperar 3 segundos para ocultar el título
}

// Llamar a la función de ocultar el título después de 216 segundos
setTimeout(ocultarTituloYReproducirAudio, 216000);

// Sincronizar letras con el audio cuando este comienza a reproducirse
audio.addEventListener("play", () => {
  requestAnimationFrame(updateLyrics);
});
var startButton = document.getElementById("startButton");
startButton.addEventListener("click", function () {
  // Oculta el botón de inicio
  startButton.style.display = "none";

  // Comienza la animación y lógica después de que el usuario interactúe
  setTimeout(ocultarTituloYReproducirAudio, 216000);
});

