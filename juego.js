const espacios = document.querySelectorAll(".celdas");
const mensaje = document.getElementById("mensaje");
const computadora = document.getElementById("computadora");
const jugador = document.getElementById("jugador");
const empatesDisplay = document.getElementById("empates"); // Agrega este elemento en tu HTML
const reiniciar = document.getElementById("reiniciar");
const nuevaPartida = document.getElementById("nuevaPartida");

let victoriaX = parseInt(localStorage.getItem("victoriaX")) || 0;
let victoriaO = parseInt(localStorage.getItem("victoriaO")) || 0;
let empates = parseInt(localStorage.getItem("empates")) || 0; // Contador de empates
let juegoTerminado = false; // Controla si el juego ha terminado

jugador.innerText = `Jugador X: ${victoriaX}`;
computadora.innerText = `Jugador O: ${victoriaO}`;
empatesDisplay.innerText = `Empates: ${empates}`; // Muestra el total de empates

const combinacionesGanadoras = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // filas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columnas
    [0, 4, 8], [2, 4, 6]             // diagonales
];

espacios.forEach((celda) => {
    celda.addEventListener("click", function() {
        if (!juegoTerminado && celda.textContent === "") {
            celda.innerHTML = "X"; // Usar letra normal
            celda.style.pointerEvents = "none"; // Desactivar la celda

            if (verificarVictoria("X")) return;

            let listaNueva = [];
            espacios.forEach((celda) => {
                if (celda.textContent === "") {
                    listaNueva.push(celda);
                }
            });

            if (listaNueva.length > 0) {
                let numeroAle = Math.floor(Math.random() * listaNueva.length);
                listaNueva[numeroAle].innerHTML = "O"; // Usar letra normal
                listaNueva[numeroAle].style.pointerEvents = "none"; // Desactivar la celda

                if (verificarVictoria("O")) return;
            }

            verificarEmpate(); // Verificar si hay un empate
        }
    });
});

function verificarVictoria(jugador) {
    for (let combinacion of combinacionesGanadoras) {
        if (combinacion.every(index => espacios[index].textContent === jugador)) {
            combinacion.forEach(index => {
                espacios[index].style.backgroundColor = jugador === "X" ? "#ff0099" : "#0099ff"; // Colores
            });
            mensaje.innerText = `VICTORIA ${jugador} HA GANADO`;
            if (jugador === "X") {
                victoriaX++;
                localStorage.setItem("victoriaX", victoriaX);
            } else {
                victoriaO++;
                localStorage.setItem("victoriaO", victoriaO);
            }
            jugador.innerText = `Jugador X: ${victoriaX}`;
            computadora.innerText = `Jugador O: ${victoriaO}`;
            juegoTerminado = true; // Marcar el juego como terminado
            return true;
        }
    }
    return false;
}

function verificarEmpate() {
    // Verificar si todas las celdas están llenas
    if ([...espacios].every(celda => celda.textContent !== "") && !juegoTerminado) {
        mensaje.innerText = "¡Es un empate!";
        empates++;
        localStorage.setItem("empates", empates); // Guardar empates
        empatesDisplay.innerText = `Empates: ${empates}`; // Actualizar el contador de empates
        juegoTerminado = true; // Marcar el juego como terminado
    }
}

reiniciar.addEventListener("click", function() {
    // Reinicia el juego completamente
    localStorage.removeItem("victoriaX");
    localStorage.removeItem("victoriaO");
    localStorage.removeItem("empates");
    victoriaX = 0;
    victoriaO = 0;
    empates = 0; // Reiniciar empates
    jugador.innerText = `Jugador X: ${victoriaX}`;
    computadora.innerText = `Jugador O: ${victoriaO}`;
    empatesDisplay.innerText = `Empates: ${empates}`; // Reiniciar el contador de empates
    mensaje.innerText = "";
    limpiarTablero();
});

nuevaPartida.addEventListener("click", function() {
    // Solo limpia el tablero sin afectar los puntajes
    limpiarTablero();
});

function limpiarTablero() {
    espacios.forEach(celda => {
        celda.innerHTML = "";
        celda.style.pointerEvents = "auto"; // Reactivar las celdas
        celda.style.backgroundColor = ""; // Limpiar el fondo
    });
    mensaje.innerText = "";
    juegoTerminado = false; // Reiniciar el estado del juego
}

