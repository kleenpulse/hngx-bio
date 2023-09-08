let currentDay = document.getElementById("currentDay");
const currentTime = document.getElementById('currentTime');

function updateUTCTime() {
    const time = new Date().getTime();
    currentTime.textContent = time
}
function updateUTCDay() {
    const options = {
        timeZone: 'UTC',
        weekday: 'long',
    };
    const day = new Date().toLocaleDateString('en-US', options);
    currentDay.textContent = day
}
// Update the time initially
updateUTCTime();
updateUTCDay();

setInterval(updateUTCTime, 100);






