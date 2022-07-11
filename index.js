const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;


const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const h1 = document.querySelector("h1");
const counterTimer = document.querySelector(".counterTimer");


const timerFunction = ()=>{
    let now = new Date();
    let dd = String(now.getDate()).padStart(2,"0");
    let mm = String(now.getMonth()+1).padStart(2,"0");
    let yyyy =  now.getFullYear();

    const enterDay = prompt("Enter the day:").padStart(2,"0");
    const enterMonth = prompt("Enter the month:").padStart(2,"0");
    const birthdayNAme = prompt("Enter your name:");
    
    let targetDate =  `${enterMonth}/${enterDay}/${yyyy}`;

    now = `${mm}/${dd}/${yyyy}`;

    if(now > targetDate){
        targetDate = `${enterMonth}/${enterDay}/${yyyy + 1}`;
    }
    
    const intervalId = setInterval(()=>{
        const timer = new Date(targetDate).getTime();
        const today = new Date().getTime();
    
        const difference = timer - today;
        const leftDay = Math.floor(difference / day);
        const leftHour = Math.floor((difference % day) / hour);
        const leftMinute = Math.floor((difference % hour) / minute);
        const leftSecond = Math.floor((difference % minute) / second);
        const nameShow = `REMAINING TIME FOR ${birthdayNAme}'s BIRTHDAY`;

        daysElement.innerText = leftDay;
        hoursElement.innerText = leftHour;
        minutesElement.innerText = leftMinute;
        secondsElement.innerText = leftSecond;
        h1.innerText =  nameShow;

        if(difference < 0){
            counterTimer.style.display = "none";
            h1.innerText = `HAPPY BIRTHDAY ${birthdayNAme}`;
            clearInterval(intervalId);
        }

        if((enterDay > 31 || enterDay < 1) || (enterMonth > 12 || enterMonth < 1)){
            counterTimer.style.display = "none";
            h1.innerText = `HEY ALIEN`;
        }

    },0);
}  

timerFunction();