
let userName=prompt("Adınızı giriniz");

let myName=document.querySelector("#myName");
myName.innerHTML=`${userName}`;


function showTime(){

    var date=new Date();
    var day =date.getDay();
    var hours=date.getHours();
    var minute=date.getMinutes();
    var second=date.getSeconds();

    let myClock=document.querySelector("#myClock");

    if(day==1){
        day="Pazartesi";
    } else if(day==2){
        day="Salı";
    }
    else if(day==3){
        day="Çarşamba";
    }
    else if(day==4){
        day="Perşembe";
    }
    else if(day==5){
        day="Cuma";
    }
    else if(day==6){
        day="Cumartesi";
    }
    else if(day==7){
        day="Pazar";
    }

    hours = (hours < 10) ? "0" + hours : hours;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;

    var time = hours + ":" + minute + ":" + second + " " +day;

    myClock.innerHTML=time;
    myClock.innerText=time;
    setTimeout(showTime, 1000);
}

showTime();