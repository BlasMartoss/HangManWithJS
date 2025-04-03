let guessedLetters = [];
let incorrectLetters = [];
let failedAttemps = 0;

const imageNames = [
    "images/imagen2.png",
    "images/imagen3.png",
    "images/imagen4.png",
    "images/imagen5.png",
    "images/imagen6.png",
    "images/imagen7.png"
];
const words = [
    "SOL", "LUNA", "CASA", "ARBOL", "LIBRO", "COMPUTADORA", "ELEFANTE", "MARIPOSA", "UNIVERSIDAD", "ESPECTACULAR",
    "PROGRAMA", "TECLADO", "RATON", "IMPRESORA", "PANTALLA", "AURICULARES", "MICROFONO", "ALTAVOCES", "PROCESADOR", "MEMORIA",
    "DISCO", "ARCHIVO", "CARPETA", "USUARIO", "CONTRASEÑA", "NAVEGADOR", "INTERNET", "PAGINA", "ENLACE", "VIDEO",
    "IMAGEN", "TEXTO", "SONIDO", "JUEGO", "APLICACION", "SISTEMA", "RED", "SERVIDOR", "CLIENTE", "CORREO",
    "MENSAJE", "LLAMADA", "MUSICA", "PELICULA", "REVISTA", "PERIODICO", "CANCION", "POEMA", "CUENTO", "NOVELA",
    "TEATRO", "CINE", "TELEVISION", "RADIO", "FOTOGRAFIA", "PINTURA", "ESCULTURA", "ARQUITECTURA", "DANZA", "CIRCO",
    "MAGIA", "DEPORTE", "JUGADOR", "EQUIPO", "PARTIDO", "GOL", "CANASTA", "CARRERA", "PUNTO", "TIEMPO",
    "REGLA", "ARBITRO", "ESTADIO", "GIMNASIO", "PISCINA", "MONTAÑA", "PLAYA", "BOSQUE", "RIO", "LAGO",
    "CIUDAD", "PUEBLO", "PAIS", "CONTINENTE", "PLANETA", "ESTRELLA", "GALAXIA", "UNIVERSO", "TIERRA", "AGUA",
    "FUEGO", "AIRE", "AMOR", "ODIO", "PAZ", "GUERRA", "VIDA", "MUERTE", "FELICIDAD", "TRISTEZA",
    "ALEGRIA", "MIEDO", "ESPERANZA", "SUEÑO", "REALIDAD", "FANTASIA", "CIENCIA", "TECNOLOGIA", "HISTORIA", "FILOSOFIA"
];

let word = getRandomWord();
function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

console.log(word);

function checkLetter(letter) {
    const letterUpper = letter.toUpperCase();

    if (guessedLetters.includes(letterUpper)) {
        alert("La letra ya ha sido adivinada.");
        return;
    }

    if (word.includes(letterUpper)) {
        guessedLetters.push(letterUpper);
        updateDisplay(letterUpper);
        checkWin();
    } else {
        incorrectLetters.push(letterUpper);
        checkLose();
    }
}

function checkWin() {
    let guessedWord = "";
    for (var letter of word) {
        if (guessedLetters.includes(letter.toUpperCase())) {
            guessedWord += letter.toUpperCase();
        } else {
            guessedWord += "_";
        }
    }
    if (guessedWord.toUpperCase() === word.toUpperCase()) {
        const gameDiv = document.getElementById("gameDiv");
        const winDiv = document.getElementById("winDiv");
        const imageElement = document.getElementById("ahorcadoImage");

        gameDiv.style.display = "none";
        winDiv.classList.remove("d-none");
        winDiv.classList.add("d-flex");
        imageElement.src = "images/imagenGanador.png";

        return true;
    }
}

function checkLose() {
    failedAttemps++;

    var element = document.getElementById("attemps");
    var imageElement = document.getElementById("ahorcadoImage");
    var gameDiv = document.getElementById("gameDiv");
    var loseDiv = document.getElementById("loseDiv");

    element.textContent = failedAttemps;
    element.style.display = "block";

    if (failedAttemps <= imageNames.length) {
        imageElement.src = imageNames[failedAttemps - 1];
    }

    if (failedAttemps === imageNames.length) {
        gameDiv.style.display = "none";
        loseDiv.classList.remove("d-none");
        loseDiv.classList.add("d-flex");
        return true;
    }
}

function updateDisplay(letter) {
    for (let i = 0; i < word.length; i++) {
        if (word[i].toUpperCase() === letter) {
            document.getElementById(`letra${i + 1}`).textContent = letter;
        }
    }
}

const restartButtons = document.querySelectorAll(".restartButton");
restartButtons.forEach(button => {
    button.addEventListener("click", function() {
        location.reload();
    });
});

function generateLetterDivs() {
    const letterContainer = document.getElementById("letterContainer");
    letterContainer.innerHTML = ""; 

    for (let i = 0; i < word.length; i++) {
        const letterDiv = document.createElement("div");
        letterDiv.id = `letra${i + 1}`;
        letterDiv.className = "col-auto letter-space border-bottom border-dark";
        letterContainer.appendChild(letterDiv);
    }
}


generateLetterDivs();