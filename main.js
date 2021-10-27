function myfunction() {
    var dots= document.getElementById("dots");
    var moretext= document.getElementById("more");
    var btntext= document.getElementById("mybtn");
    if(dots.style.display==="none"){
        dots.style.display="inline";
        btntext.innerHTML="Read more";
        moretext.style.display="none";


    }
    else{
        dots.style.display="none";
        btntext.innerHTML="Read less";
        moretext.style.display="inline";
    }
}
function menu(){
        
        var a= document.getElementById('hoo');
        if(a.style.display==="block"){
            a.style.display="none";
        }
        else{
            a.style.display="block";
        }
    }
function me(){
    var x= document.getElementById('hoo');
    x.style.display="block";
    var y= document.getElementById('menu');
    y.innerHTML="class"

    }

    var txt= document.getElementById('hi');
    function write(){
        for(var i=0;i<txt.length;i++){
            txt.innerHTML+=txt.charAt(i);
        
        setTimeout(write,50);
        }
    }
function h(){
        var c=document.getElementById('button');
        if(c.innerHTML===Date()){
            c.innerHTML="Lets Take off";
        }
        else{
        c.innerHTML=Date();
        }
    }
    
    
