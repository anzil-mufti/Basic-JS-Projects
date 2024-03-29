const clock=document.getElementById('clock')

setInterval(function(){
    let date=new Date()
    //console.log(date.toLocaleTimeString());
    clock.innerHTML=date.toLocaleTimeString()
},1000) //1000ms will tell the time each second, this syntax is important