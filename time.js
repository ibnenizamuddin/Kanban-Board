const timediv = document.getElementById('time-list');
function setWordTime() {
    // your code goes here...
    let d = new Date();
    let currentHour = d.getHours();
    let currentMinute = d.getMinutes();
    const timeArray = ['', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE', 'TEN', 'ELEVEN', 'TWELVE', 'THIRTEEN', 'Fourteen', 'QUARTER', 'SIXTEEN', 'SEVENTEEN', 'EIGHTEEN', 'NINETEEN', 'TWENTY', 'TWENTY ONE', 'TWENTY TWO', 'TWENTY THREE', 'TWENTY FOUR', 'TWENTY FIVE', 'TWENTY SIX', 'TWENTY SEVEN', 'TWENTY EIGHT', 'TWENTY NINE', 'HALF'];

    let setCurrentTime = ''
    if (currentMinute === 0) {
        setCurrentTime = `Its <span class="main">${timeArray[currentHour]}</span>  'O Clock Now`;
    }
    else if (currentMinute === 15) {
        setCurrentTime = `Its <span class="main">${timeArray[currentMinute]}</span>  past <span class="main">${timeArray[currentHour]}</span> `;
    }
    else if (currentMinute < 30) {
        setCurrentTime = `Its <span class="main">${timeArray[currentMinute]}</span>  minute past <span class="main">${timeArray[currentHour]}</span> `;
    }
    else if (timeArray[60 - currentMinute] === 45) {
        setCurrentTime = `Its <span class="main">${timeArray[60 - currentMinute]}</span>  to <span class="main">${timeArray[currentHour + 1]}</span>  `;
    }
    else {
        setCurrentTime = `Its <span class="main">${timeArray[60 - currentMinute]}</span> minute to <span class="main">${timeArray[currentHour + 1]}</span>  `;
    }
    timediv.innerHTML = setCurrentTime;

}
setWordTime();
setInterval(setWordTime, 60 * 1000);
