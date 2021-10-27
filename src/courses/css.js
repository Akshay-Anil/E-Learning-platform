const rec = [
    {title:"Introduction | CSS | Tutorial 1", duration:"1:52", link:"https://www.youtube.com/watch?v=WZ2uqGkHoR0&list=PLLAZ4kZ9dFpNO7ScZFr-WTmtcBY3AN1M7&index=1", thumbnail:"https://img.youtube.com/vi/WZ2uqGkHoR0/maxresdefault.jpg"},
    {title:"Basic Inline Styling | CSS | Tutorial 2", duration:"11:01", link:"https://www.youtube.com/watch?v=jH_WY-sQ8Lg&list=PLLAZ4kZ9dFpNO7ScZFr-WTmtcBY3AN1M7&index=2", thumbnail:"https://img.youtube.com/vi/jH_WY-sQ8Lg/maxresdefault.jpg"},
    {title:"Colors | CSS | Tutorial 3", duration:"5:37", link:"https://www.youtube.com/watch?v=jUFjErKxIPo&list=PLLAZ4kZ9dFpNO7ScZFr-WTmtcBY3AN1M7&index=3", thumbnail:"https://img.youtube.com/vi/jUFjErKxIPo/maxresdefault.jpg"},
    {title:"Margins & Padding | CSS | Tutorial 4", duration:"6:41", link:"https://www.youtube.com/watch?v=k4xA_Olo_Uo&list=PLLAZ4kZ9dFpNO7ScZFr-WTmtcBY3AN1M7&index=4", thumbnail:"https://img.youtube.com/vi/k4xA_Olo_Uo/maxresdefault.jpg"},
    {title:"DIsplay & Floats | CSS | Tutorial 5", duration:"8:21" ,link:"https://www.youtube.com/watch?v=Bzd1Pnxqeic&list=PLLAZ4kZ9dFpNO7ScZFr-WTmtcBY3AN1M7&index=5", thumbnail:"https://img.youtube.com/vi/Bzd1Pnxqeic/maxresdefault.jpg"},
    {title:"Position - Static, Relative, Absolute, Fixed | CSS | Tutorial 6", duration:"11:20", link:"https://www.youtube.com/watch?v=_0Z1oNQ93Wo&list=PLLAZ4kZ9dFpNO7ScZFr-WTmtcBY3AN1M7&index=6", thumbnail:"https://img.youtube.com/vi/_0Z1oNQ93Wo/maxresdefault.jpg"},
    {title:"Shadows, Opacity & Border Radius | CSS | Tutorial 7", duration:"5:52", link:"https://www.youtube.com/watch?v=kZAlp-MDvlI&list=PLLAZ4kZ9dFpNO7ScZFr-WTmtcBY3AN1M7&index=7", thumbnail:"https://img.youtube.com/vi/kZAlp-MDvlI/maxresdefault.jpg"},
    {title:"Text & Fonts | CSS | Tutorial 8", duration:"7:12", link:"https://www.youtube.com/watch?v=Bc6tss3gEvU&list=PLLAZ4kZ9dFpNO7ScZFr-WTmtcBY3AN1M7&index=8", thumbnail:"https://img.youtube.com/vi/Bc6tss3gEvU/maxresdefault.jpg"},
    {title:"Style Tags | CSS | Tutorial 9", duration:"5:43", link:"https://www.youtube.com/watch?v=q4Mxv3gr5mc&list=PLLAZ4kZ9dFpNO7ScZFr-WTmtcBY3AN1M7&index=9", thumbnail:"https://img.youtube.com/vi/q4Mxv3gr5mc/maxresdefault.jpg"},
    {title:"External Style Sheets | CSS | Tutorial 10", duration:"5:32", link:"https://www.youtube.com/watch?v=2P_LUPc2HrM&list=PLLAZ4kZ9dFpNO7ScZFr-WTmtcBY3AN1M7&index=10", thumbnail:"https://img.youtube.com/vi/2P_LUPc2HrM/maxresdefault.jpg"},
    {title:"IDs & Classes | CSS | Tutorial 11", duration:"10:25", link:"https://www.youtube.com/watch?v=4C_-y9dIc54&list=PLLAZ4kZ9dFpNO7ScZFr-WTmtcBY3AN1M7&index=11", thumbnail:"https://img.youtube.com/vi/4C_-y9dIc54/maxresdefault.jpg"},
    {title:"CSS Selectors | CSS | Tutorial 12", duration:"9:12", link:"https://www.youtube.com/watch?v=TbfIyjNTXbA&list=PLLAZ4kZ9dFpNO7ScZFr-WTmtcBY3AN1M7&index=12", thumbnail:"https://img.youtube.com/vi/TbfIyjNTXbA/maxresdefault.jpg"},
    {title:"Flexbox | CSS | Tutorial 13", duration:"12:52", link:"https://www.youtube.com/watch?v=6FedyF0F2i8&list=PLLAZ4kZ9dFpNO7ScZFr-WTmtcBY3AN1M7&index=13", thumbnail:"https://img.youtube.com/vi/6FedyF0F2i8/maxresdefault.jpg"},
    {title:"Animations | CSS | Tutorial 14", duration:"8:54", link:"https://www.youtube.com/watch?v=89dMYqpFcYs&list=PLLAZ4kZ9dFpNO7ScZFr-WTmtcBY3AN1M7&index=14", thumbnail:"https://img.youtube.com/vi/89dMYqpFcYs/maxresdefault.jpg"},
    {title:"Imports | CSS | Tutorial 15", duration:"3:49", link:"https://www.youtube.com/watch?v=kfUsT3-M3_k&list=PLLAZ4kZ9dFpNO7ScZFr-WTmtcBY3AN1M7&index=15", thumbnail:"https://img.youtube.com/vi/kfUsT3-M3_k/maxresdefault.jpg"},
    {title:"Browser Support | CSS | Tutorial 16", duration:"4:04", link:"https://www.youtube.com/watch?v=B7Y3t2a5mTA&list=PLLAZ4kZ9dFpNO7ScZFr-WTmtcBY3AN1M7&index=16", thumbnail:"https://img.youtube.com/vi/B7Y3t2a5mTA/maxresdefault.jpg"},
    {title:"CSS Frameworks | CSS | Tutorial 17", duration:"9:07", link:"https://www.youtube.com/watch?v=nDXDxA27poE&list=PLLAZ4kZ9dFpNO7ScZFr-WTmtcBY3AN1M7&index=17", thumbnail:"https://img.youtube.com/vi/nDXDxA27poE/maxresdefault.jpg"},
    {title:"Build a CSS Star Animation | 100 Days CSS Challenge", duration:"21:44", link:"https://www.youtube.com/watch?v=gqD8H8j0a3I&list=PLLAZ4kZ9dFpNO7ScZFr-WTmtcBY3AN1M7&index=18", thumbnail:"https://img.youtube.com/vi/gqD8H8j0a3I/maxresdefault.jpg"},
    {title:"Build a YouTube Video Card in 30 Minutes | HTML & CSS", duration:"35:47", link:"https://www.youtube.com/watch?v=tXoADj5TEKs&list=PLLAZ4kZ9dFpNO7ScZFr-WTmtcBY3AN1M7&index=19", thumbnail:"https://img.youtube.com/vi/tXoADj5TEKs/maxresdefault.jpg"},
    {title:"Build a Responsive Search Bar in 30 Minutes | HTML & CSS", duration:"27:13", link:"https://www.youtube.com/watch?v=4DR9Uvu1vnM&list=PLLAZ4kZ9dFpNO7ScZFr-WTmtcBY3AN1M7&index=20", thumbnail:"https://img.youtube.com/vi/4DR9Uvu1vnM/maxresdefault.jpg"}
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
      