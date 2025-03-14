function analogWatch(){
    let [day,month,date] = new Date().toDateString().split(" ")
    document.querySelector('.day').innerText=day;
    document.querySelector('.month').innerText=month;
    document.querySelector('.date').innerText=date;
    
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    const second = new Date().getSeconds();

    const hour_hand = document.getElementById('hour');
    hour_hand.style.transform=`translate(-50%,-50%) rotate(${hour*30}deg)`
    const minute_hand=document.getElementById('minute');
    minute_hand.style.transform=`translate(-50%,-50%) rotate(${minute*6}deg)`;
    const second_hand = document.getElementById('second');
    second_hand.style.transform= `translate(-50%,-50%) rotate(${second*6}deg)`;
}
setInterval(analogWatch,1000);