const rec =  [
    {title:"Introduction | HTML | Tutorial 1", duration:"2:14",link:"https://www.youtube.com/watch?v=Ny1g1eQHnCI&list=PLLAZ4kZ9dFpMSXUYwxDFOvyxlssug29Fu", thumbnail:"https://img.youtube.com/vi/Ny1g1eQHnCI/maxresdefault.jpg"},
    {title:"Choosing a Text Editor | HTML | Tutorial 2",duration:"6:37",link:"https://www.youtube.com/watch?v=uGGTXUsk7EM&list=PLLAZ4kZ9dFpMSXUYwxDFOvyxlssug29Fu&index=2", thumbnail:"https://img.youtube.com/vi/uGGTXUsk7EM/maxresdefault.jpg"},
    {title:"Creating an HTML file | HTML | Tutorial 3",duration:"12:37",link:"https://www.youtube.com/watch?v=zKRHZ092ICM&list=PLLAZ4kZ9dFpMSXUYwxDFOvyxlssug29Fu&index=3", thumbnail:"https://img.youtube.com/vi/zKRHZ092ICM/maxresdefault.jpg"},
    {title:"Basic Tags | HTML | Tutorial 4",duration:"19:35",link:"https://www.youtube.com/watch?v=YTxrjJS6rpE&list=PLLAZ4kZ9dFpMSXUYwxDFOvyxlssug29Fu&index=4", thumbnail:"https://img.youtube.com/vi/YTxrjJS6rpE/maxresdefault.jpg"},
    {title:"Comments | HTML | Tutorial 5",duration:"5:43",link:"https://www.youtube.com/watch?v=OGkEwGNI9O8&list=PLLAZ4kZ9dFpMSXUYwxDFOvyxlssug29Fu&index=5", thumbnail:"https://img.youtube.com/vi/OGkEwGNI9O8/maxresdefault.jpg"},
    {title:"Style & Color | HTML | Tutorial 6",duration:"6:13",link:"https://www.youtube.com/watch?v=eN72Ft-CCg4&list=PLLAZ4kZ9dFpMSXUYwxDFOvyxlssug29Fu&index=6", thumbnail:"https://img.youtube.com/vi/eN72Ft-CCg4/maxresdefault.jpg"},
    {title:"Formatting a Page | HTML | Tutorial 7",duration:"11:28",link:"https://www.youtube.com/watch?v=dVvifZurBcY&list=PLLAZ4kZ9dFpMSXUYwxDFOvyxlssug29Fu&index=7", thumbnail:"https://img.youtube.com/vi/dVvifZurBcY/maxresdefault.jpg"},
    {title:"Links | HTML | Tutorial 8",duration:"8:36",link:"https://www.youtube.com/watch?v=pTpkvZhoZM4&list=PLLAZ4kZ9dFpMSXUYwxDFOvyxlssug29Fu&index=8", thumbnail:"https://img.youtube.com/vi/pTpkvZhoZM4/maxresdefault.jpg"},
    {title:"Images | HTML | Tutorial 9",duration:"8:59",link:"https://www.youtube.com/watch?v=u2BtHQwxq7E&list=PLLAZ4kZ9dFpMSXUYwxDFOvyxlssug29Fu&index=9", thumbnail:"https://img.youtube.com/vi/u2BtHQwxq7E/maxresdefault.jpg"},
    {title:"Videos & Youtube iFrames | HTML | Tutorial 10",duration:"7:06",link:"https://www.youtube.com/watch?v=M_vEI64hbso&list=PLLAZ4kZ9dFpMSXUYwxDFOvyxlssug29Fu&index=10", thumbnail:"https://img.youtube.com/vi/M_vEI64hbso/maxresdefault.jpg"},
    {title:"Lists | HTML | Tutorial 11",duration:"6:12",link:"https://www.youtube.com/watch?v=uGY59pKh3rU&list=PLLAZ4kZ9dFpMSXUYwxDFOvyxlssug29Fu&index=11", thumbnail:"https://img.youtube.com/vi/uGY59pKh3rU/maxresdefault.jpg"},
    {title:"Tables | HTML | Tutorial 12",duration:"8:47",link:"https://www.youtube.com/watch?v=6RE5vCsPOS4&list=PLLAZ4kZ9dFpMSXUYwxDFOvyxlssug29Fu&index=12", thumbnail:"https://img.youtube.com/vi/6RE5vCsPOS4/maxresdefault.jpg"},
    {title:"Divs & Spans | HTML | Tutorial 13",duration:"7:52",link:"https://www.youtube.com/watch?v=lyVwVgiRNIU&list=PLLAZ4kZ9dFpMSXUYwxDFOvyxlssug29Fu&index=13", thumbnail:"https://img.youtube.com/vi/lyVwVgiRNIU/maxresdefault.jpg"},
    {title:"Input & Forms | HTML | Tutorial 14",duration:"9:09",link:"https://www.youtube.com/watch?v=vj78j_Sy3uM&list=PLLAZ4kZ9dFpMSXUYwxDFOvyxlssug29Fu&index=14", thumbnail:"https://img.youtube.com/vi/vj78j_Sy3uM/maxresdefault.jpg"},
    {title:"iFrames | HTML | Tutorial 15",duration:"3:57",link:"https://www.youtube.com/watch?v=-25g1wgJwfY&list=PLLAZ4kZ9dFpMSXUYwxDFOvyxlssug29Fu&index=15", thumbnail:"https://img.youtube.com/vi/-25g1wgJwfY/maxresdefault.jpg"},
    {title:"Meta Tags | HTML | Tutorial 16lecture 1",duration:"5:29",link:"https://www.youtube.com/watch?v=Luo_wCcWAaw&list=PLLAZ4kZ9dFpMSXUYwxDFOvyxlssug29Fu&index=16", thumbnail:"https://img.youtube.com/vi/Luo_wCcWAaw/maxresdefault.jpg"}
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
      


    
    


