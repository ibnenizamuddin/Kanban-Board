const timediv = document.getElementById('time-list');
//const mainBody= document.getElementsByTagName("BODY")[0];
let PhotoImage=[];
function setWordTime() {

    let d = new Date();
    let currentHour = d.getHours();
    let currentMinute = d.getMinutes();
    const timeArray = ['', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE', 'TEN', 'ELEVEN', 'TWELVE', 'THIRTEEN', 'Fourteen', 'QUARTER', 'SIXTEEN', 'SEVENTEEN', 'EIGHTEEN', 'NINETEEN', 'TWENTY', 'TWENTY ONE', 'TWENTY TWO', 'TWENTY THREE', 'TWENTY FOUR', 'TWENTY FIVE', 'TWENTY SIX', 'TWENTY SEVEN', 'TWENTY EIGHT', 'TWENTY NINE', 'HALF'];
    const HourArray = ['', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE', 'TEN', 'ELEVEN', 'TWELVE', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE', 'TEN', 'ELEVEN', 'TWELVE'];
    let setCurrentTime = ''
    if (currentMinute === 0) {
        setCurrentTime = `It's <span class="main">${HourArray[currentHour]}</span>  'O Clock Now`;
    }
    else if (currentMinute === 15){
        setCurrentTime = `It's <span class="main">${timeArray[currentMinute]}</span> past <span class="main">${HourArray[currentHour]}</span> `;
    }
    else if (currentMinute < 30) {
        setCurrentTime = `It's <span class="main">${timeArray[currentMinute]}</span> minute past <span class="main">${HourArray[currentHour]}</span> `;
    }
    else if (currentMinute === 30) {
        setCurrentTime = `It's <span class="main">${timeArray[currentMinute]}</span> past <span class="main">${HourArray[currentHour]}</span> `;
    }
    else if (timeArray[60 - currentMinute] === 45) {
        setCurrentTime = `It's <span class="main">${timeArray[60 - currentMinute]}</span> to <span class="main">${HourArray[currentHour + 1]}</span>  `;
    }
    else {
        setCurrentTime = `It's <span class="main">${timeArray[60 - currentMinute]}</span> minute to <span class="main">${HourArray[currentHour + 1]}</span>  `;
    }
    timediv.innerHTML = setCurrentTime;
}
setWordTime();
setInterval(setWordTime, 60 * 1000);

setInterval(setBackgrounPhoto, 600 * 1000);


async function setBackgrounPhoto(){
    try{
            //get API Key
    const APIKey='Ccdvtii4CVCFlpw31ZeAeiXss_MC1rujCWXr_-P_lqU';
    const URL=`https://api.unsplash.com/photos/random?count=1&client_id=${APIKey}`;
    let response = await fetch(URL);
    PhotoImage= await response.json();
    document.body.style.backgroundImage = `url('${PhotoImage[0].urls.regular}')`;

    }
    catch (error){
        //Error
    }

}