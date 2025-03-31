
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
    "ABANDONO", "ABERRADO", "ABOGACÍA", "ABONADOR", "ABRUMADO", "ABSORBER", "ABUELITO", "ACCEDIDO", "ACEITUNA", "ACELERAR",
    "ACEPTADO", "ACERTADO", "ACLARADO", "ACOGIDOR", "ACOMETER", "ACONTECE", "ACORDADO", "ACTUANTE", "ADAPTADO", "ADEUDADO",
    "ADHERIDO", "ADJETIVO", "ADJUDICA", "ADMITIDO", "ADORNADO", "ADQUIRIR", "ADULADOR", "ADVERTIR", "AEROPUER", "AFECTADO",
    "AFILIADO", "AFIRMARA", "AGARRADO", "AGENCIA", "AGITADOR", "AGRADADO", "AGRUPADO", "AGUARDAR", "AHORCADO", "AJUSTADO",
    "ALARGADO", "ALCANZAR", "ALEGRADO", "ALFABETO", "ALIMENTA", "ALIVIADO", "ALMOHADA", "ALQUILER", "ALTERADO", "ALUMBRAR",
    "AMARRADO", "AMENAZAR", "AMISTOSO", "AMPLIADO", "ANALISTA", "ANCIANOS", "ANDAMIOS", "ANEXIONA", "ANIMALES", "ANOTADOR",
    "ANUNCIAR", "APAGADOR", "APARECER", "APARTADO", "APELANTE", "APETECER", "APLAZADO", "APLICADO", "APOYANDO", "APRENDIZ",
    "APRESURA", "APROBADO", "APUNTADO", "AQUEJAR", "ARBITRIO", "ARGUMENT", "ARMONICO", "ARRAIGAR", "ARRASTRA", "ARREGLAR",
    "ARREPENT", "ARRODILL", "ARTICULO", "ASALTADO", "ASCENDER", "ASEGURAR", "ASIGNADO", "ASISTIDO", "ASOCIADO", "ASOMBRAR",
    "ASPECTOS", "ASPIRADO", "ATAJANDO", "ATENTADO", "ATERRIZA", "ATRACTIV", "ATROPELL", "AUDITORI", "AUMENTAR", "AUTORIZA",
    "AVANZADO", "AVENTURA", "AVERIGUA", "AYUDANTE", "AZAFATAS", "AZOTANDO"
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