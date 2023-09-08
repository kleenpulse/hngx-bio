const dataDay = document.querySelector("p[data-testid='currentDayOfTheWeek']");
const dataTime = document.querySelector("p[data-testid='currentUTCTime']");

function updateUTCTime() {
    const time = new Date().getTime();
    currentTime.textContent = time
} dataTime
function updateUTCDay() {
    const options = {
        timeZone: 'UTC',
        weekday: 'long',
    };
    const day = new Date().toLocaleDateString('en-US', options);
    dataDay.textContent = day
}
// Update the time initially
updateUTCTime();
updateUTCDay();

setInterval(updateUTCTime, 100);






