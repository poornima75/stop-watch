function showScreen(screenId) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });

    // Show the selected screen
    document.getElementById(screenId).classList.add('active');
}


// Digital & Analog Clock
function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    document.getElementById('clock').innerText = now.toLocaleTimeString();
    
    const hourDeg = (hours % 12) * 30 + minutes * 0.5;
    const minuteDeg = minutes * 6;
    const secondDeg = seconds * 6;
    
    document.getElementById('hourHand').style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
    document.getElementById('minuteHand').style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
    document.getElementById('secondHand').style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();


// Stopwatch
let stopwatchInterval, stopwatchTime = 0, stopwatchRunning = false;

function startStopwatch() {
    if (!stopwatchRunning) {
        stopwatchRunning = true;
        stopwatchInterval = setInterval(() => {
            stopwatchTime++;
            updateStopwatchDisplay();
        }, 1000);
    }
}

function pauseStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchRunning = false;
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchTime = 0;
    stopwatchRunning = false;
    updateStopwatchDisplay();
}

function updateStopwatchDisplay() {
    document.getElementById('stopwatch').innerText = new Date(stopwatchTime * 1000).toISOString().substr(11, 8);
    document.getElementById('stopwatchHand').style.transform = `rotate(${stopwatchTime * 6}deg)`;
}

// Timer
let timerInterval, timerTime = 0, timerRunning = false;

function startTimer() {
    if (!timerRunning) {
        timerTime = parseInt(document.getElementById('timerInput').value, 10) || 0;
        if (timerTime > 0) {
            timerRunning = true;
            timerInterval = setInterval(() => {
                if (timerTime > 0) {
                    timerTime--;
                    updateTimerDisplay();
                } else {
                    clearInterval(timerInterval);
                    alert("Time's up!");
                    timerRunning = false;
                }
            }, 1000);
        }
    }
}

function pauseTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
}

function resetTimer() {
    clearInterval(timerInterval);
    timerTime = 0;
    timerRunning = false;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    document.getElementById('timer').innerText = new Date(timerTime * 1000).toISOString().substr(11, 8);
    document.getElementById('timerHand').style.transform = `rotate(${(60 - timerTime) * 6}deg)`;
}