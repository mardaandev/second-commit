const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const daysEl2 = document.getElementById('days-2');
const hoursEl2 = document.getElementById('hours-2');
const minutesEl2 = document.getElementById('minutes-2');
const secondsEl2 = document.getElementById('seconds-2');



const Date1 = "9 Nov 2023"
const Date2 = "1 Jan 2024"

function countdown1() {
    const DiwaliDate = new Date(Date1);
    const newyearsDate = new Date(Date2);
    const currentDate = new Date();

    const totalSeconds1 = (DiwaliDate - currentDate) / 1000;
    const days1 = Math.floor(totalSeconds1 /3600 / 24);
    const hours1 = Math.floor((totalSeconds1 /3600)%24);
    const minutes1 = Math.floor((totalSeconds1 /60)%60);
    const seconds1 = Math.floor((totalSeconds1)%60);

    daysEl.innerHTML = formatTime(days1);
    hoursEl.innerHTML = formatTime(hours1);
    minutesEl.innerHTML = formatTime(minutes1);
    secondsEl.innerHTML = formatTime(seconds1);
 
 
    const totalSeconds2 = (newyearsDate - currentDate) / 1000;
    const days2 = Math.floor(totalSeconds2 /3600 / 24);
    const hours2 = Math.floor((totalSeconds2 /3600)%24);
    const minutes2 = Math.floor((totalSeconds2 /60)%60);
    const seconds2 = Math.floor((totalSeconds2)%60);

    daysEl2.innerHTML = formatTime(days2);
    hoursEl2.innerHTML = formatTime(hours2);
    minutesEl2.innerHTML = formatTime(minutes2);
    secondsEl2.innerHTML = formatTime(seconds2);

} 

function formatTime(time){
    return time < 10 ? `0${time}` : time;

}

countdown1();

setInterval(countdown1, 1000);