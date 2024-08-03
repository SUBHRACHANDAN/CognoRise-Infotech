// script.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('timer-form');
    const countdownDisplay = document.getElementById('countdown');
    let countdownInterval;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const targetDate = new Date(document.getElementById('target-date').value);
        
        if (countdownInterval) {
            clearInterval(countdownInterval);
        }
        
        startCountdown(targetDate);
    });

    function startCountdown(targetDate) {
        function updateCountdown() {
            const now = new Date();
            const timeDifference = targetDate - now;

            if (timeDifference <= 0) {
                clearInterval(countdownInterval);
                countdownDisplay.textContent = 'Countdown Finished!';
                return;
            }

            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            countdownDisplay.textContent = `
                ${days}d ${hours}h ${minutes}m ${seconds}s
            `;
        }

        updateCountdown(); // Initial call to display immediately
        countdownInterval = setInterval(updateCountdown, 1000);
    }
});
