const rec = [
    {title:"Python How to Program Pt 1", duration:"9:48", link:"https://www.youtube.com/watch?v=fdv1NlEZWro&list=PL3072C720775B213E&index=1", thumbnail:"https://img.youtube.com/vi/fdv1NlEZWro/maxresdefault.jpg"},
    {title:"Python How to Program Pt 2", duration:"13:12", link:"https://www.youtube.com/watch?v=nV7f_FgZJIA&list=PL3072C720775B213E&index=2", thumbnail:"https://img.youtube.com/vi/nV7f_FgZJIA/maxresdefault.jpg"},
    {title:"Python How to Program Pt 3", duration:"12:19", link:"https://www.youtube.com/watch?v=Xp6XrU-H7ig&list=PL3072C720775B213E&index=3", thumbnail:"https://img.youtube.com/vi/Xp6XrU-H7ig/maxresdefault.jpg"},
    {title:"Python How to Program Pt 4", duration:"13:14", link:"https://www.youtube.com/watch?v=YiLiCxq1QX8&list=PL3072C720775B213E&index=4", thumbnail:"https://img.youtube.com/vi/YiLiCxq1QX8/maxresdefault.jpg"},
    {title:"Python How to Program Pt 5", duration:"7:46", link:"https://www.youtube.com/watch?v=Z-HpXbhVuGo&list=PL3072C720775B213E&index=5", thumbnail:"https://img.youtube.com/vi/Z-HpXbhVuGo/maxresdefault.jpg"},
    {title:"Python How to Program Pt 6", duration:"13:27", link:"https://www.youtube.com/watch?v=pF7xdh4DW-o&list=PL3072C720775B213E&index=6", thumbnail:"https://img.youtube.com/vi/pF7xdh4DW-o/maxresdefault.jpg"},
    {title:"Python How to Program Pt 7", duration:"12:38", link:"https://www.youtube.com/watch?v=L-BePDdwvmA&list=PL3072C720775B213E&index=7", thumbnail:"https://img.youtube.com/vi/L-BePDdwvmA/maxresdefault.jpg"}
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