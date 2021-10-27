const rec = [
    {title:"PHP Programming Language Tutorial - Full Course", duration:"4:36:38", link:"https://www.youtube.com/watch?v=OK_JCtrrv-c", thumbnail:"https://img.youtube.com/vi/OK_JCtrrv-c/maxresdefault.jpg"}
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