const rec = [
    {title:"Javascript Scripting Tutorial 1", duration:"9:41", link:"https://www.youtube.com/watch?v=zhQGj0SWZWY&list=PLD6B481461BE08452&index=1", thumbnail:"https://img.youtube.com/vi/zhQGj0SWZWY/maxresdefault.jpg"},
    {title:"Javascript Scripting Tutorial Part 2", duration:"9:12", link:"https://www.youtube.com/watch?v=kL1hgNGDPHg&list=PLD6B481461BE08452&index=2", thumbnail:"https://img.youtube.com/vi/kL1hgNGDPHg/maxresdefault.jpg"},
    {title:"Javascript Scripting Tutorial Part 3", duration:"9:59", link:"https://www.youtube.com/watch?v=IAbtlkMCt6M&list=PLD6B481461BE08452&index=3", thumbnail:"https://img.youtube.com/vi/IAbtlkMCt6M/maxresdefault.jpg"},
    {title:"Javascript Scripting Pt 4 How to", duration:"9:26", link:"https://www.youtube.com/watch?v=Xh95QrBrgqs&list=PLD6B481461BE08452&index=4", thumbnail:"https://img.youtube.com/vi/Xh95QrBrgqs/maxresdefault.jpg"},
    {title:"Javascript Scripting Pt 5 Event Handlers", duration:"5:29", link:"https://www.youtube.com/watch?v=kJ54v8qhT9U&list=PLD6B481461BE08452&index=5", thumbnail:"https://img.youtube.com/vi/kJ54v8qhT9U/maxresdefault.jpg"}
]
var recorded_session = "";
    var lessthan5 = "";
    var greaterthan5 = "";

    rec.forEach((rec) =>{
        
    minutes = rec.duration.substr(0,rec.duration.length - 3);
         recorded_session+='<div class="session_container"><div class="image"><img src='+rec.thumbnail+'width="100%" height="100%"></div><div class="details"><p>Title : <span>'+rec.title +'</span></p><p>Duration : <span>'+rec.duration+'</span></p><p>Video link: <a href='+rec.link+'>Watch video</a></p></div></div>';
        if(minutes<5){
            lessthan5+='<div class="session_container"><div class="image"><img src='+rec.thumbnail+'width="100%" height="100%"></div><div class="details"><p>Title : <span>'+rec.title +'</span></p><p>Duration : <span>'+rec.duration+'</span></p><p>Video link: <a href='+rec.link+'>Watch video</a></p></div></div>';
        }
        else{
            greaterthan5+='<div class="session_container"><div class="image"><img src='+rec.thumbnail+'width="100%" height="100%"></div><div class="details"><p>Title : <span>'+rec.title +'</span></p><p>Duration : <span>'+rec.duration+'</span></p><p>Video link: <a href='+rec.link+'>Watch video</a></p></div></div>';
        }
});

        var sess_cont = document.getElementById("sessions");

        var checkBoxAll = document.getElementById("0");
        var checkBoxLT = document.getElementById("1");
        var checkBoxGT = document.getElementById("2");

        if (checkBoxAll.checked == true){
            sess_cont.innerHTML= recorded_session;
        } else if(checkBoxLT.checked == true){
            sess_cont.innerHTML= lessthan5;
        }
        else if(checkBoxGT.checked == true){
            sess_cont.innerHTML= greaterthan5;
        }