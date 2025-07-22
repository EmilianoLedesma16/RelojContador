// Reloj digital

function updateClock(){
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
}

// Actualizar el reloj cada segundo
setInterval(updateClock, 1000);
updateClock();

// Temporizador
let timerInterval;
let timerSeconds = 0;

function updatetimerDisplay(){
    const hours = Math.floor(timerSeconds / 3600).toString().padStart(2,'0');
    const minutes = Math.floor(timerSeconds % 3600 / 60).toString().padStart(2, '0');
    const seconds = (timerSeconds % 60).toString().padStart(2, '0');
    document.getElementById('timer-display').textContent = `${hours}:${minutes}:${seconds}`;
}

document.getElementById('start-timer').addEventListener('click', () => {
    if (!timerInterval){
        timerInterval = setInterval(() => {
            timerSeconds++;
            updatetimerDisplay();
        }, 1000);
    }
});

document.getElementById('pause-timer').addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
});

document.getElementById('reset-timer').addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
    timerSeconds = 0;
    updatetimerDisplay();
});