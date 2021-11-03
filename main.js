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
    function menu(){
        
        var a= document.getElementById('hoo');
        if(a.style.display==="block"){
            a.style.display="none";
        }
        else{
            a.style.display="block";
        }
    }
    function t(){
       var q=prompt(" Enter your name:");
       alert("Hello"+" "+ q+" "+ "Welcome to the page...");
    }
    function j(){
        var v=document.getElementById('hoo')
        if( v.style.display==='block'){
            v.style.display="none";
        }
        else
        v.style.display='block';
    }
    function cv(){
        
    }
    var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}


var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
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
function myfunctio() {
    var dots= document.getElementById("dot");
    var moretext= document.getElementById("mor");
    var btntext= document.getElementById("mybt");
    if(dots.style.display==="none"){
        dots.style.display="inline";
        btntext.innerHTML="Read more";
        moretext.style.display="none";
        


    }
    else{
        dots.style.display="none";
        btntext.innerHTML="Read less";
        moretext.style.display="inline";
    }}   

    function myfunction3() {
        var dots= document.getElementById("dots3");
        var moretext= document.getElementById("more3");
        var btntext= document.getElementById("mybtn3");
        if(dots.style.display==="none"){
            dots.style.display="inline";
            btntext.innerHTML="Read more";
            moretext.style.display="none";
            
    
    
        }
        else{
            dots.style.display="none";
            btntext.innerHTML="Read less";
            moretext.style.display="inline";
        }}   
        function myfunction4() {
            var dots= document.getElementById("dots4");
            var moretext= document.getElementById("more4");
            var btntext= document.getElementById("mybtn4");
            if(dots.style.display==="none"){
                dots.style.display="inline";
                btntext.innerHTML="Read more";
                moretext.style.display="none";
                
        
        
            }
            else{
                dots.style.display="none";
                btntext.innerHTML="Read less";
                moretext.style.display="inline";
            }}   
            function myfunction5() {
                var dots= document.getElementById("dots5");
                var moretext= document.getElementById("more5");
                var btntext= document.getElementById("mybtn5");
                if(dots.style.display==="none"){
                    dots.style.display="inline";
                    btntext.innerHTML="Read more";
                    moretext.style.display="none";
                    
            
            
                }
                else{
                    dots.style.display="none";
                    btntext.innerHTML="Read less";
                    moretext.style.display="inline";
                }}   
                function myfunction6() {
                    var dots= document.getElementById("dots6");
                    var moretext= document.getElementById("more6");
                    var btntext= document.getElementById("mybtn6");
                    if(dots.style.display==="none"){
                        dots.style.display="inline";
                        btntext.innerHTML="Read more";
                        moretext.style.display="none";
                        
                
                
                    }
                    else{
                        dots.style.display="none";
                        btntext.innerHTML="Read less";
                        moretext.style.display="inline";
                    }}   
                    function myfunction7() {
                        var dots= document.getElementById("dots7");
                        var moretext= document.getElementById("more7");
                        var btntext= document.getElementById("mybtn7");
                        if(dots.style.display==="none"){
                            dots.style.display="inline";
                            btntext.innerHTML="Read more";
                            moretext.style.display="none";
                            
                    
                    
                        }
                        else{
                            dots.style.display="none";
                            btntext.innerHTML="Read less";
                            moretext.style.display="inline";
                        }}   
                        function myfunction8() {
                            var dots= document.getElementById("dots8");
                            var moretext= document.getElementById("more8");
                            var btntext= document.getElementById("mybtn8");
                            if(dots.style.display==="none"){
                                dots.style.display="inline";
                                btntext.innerHTML="Read more";
                                moretext.style.display="none";
                                
                        
                        
                            }
                            else{
                                dots.style.display="none";
                                btntext.innerHTML="Read less";
                                moretext.style.display="inline";
                            }}   
                            function myfunction9() {
                                var dots= document.getElementById("dots9");
                                var moretext= document.getElementById("more9");
                                var btntext= document.getElementById("mybtn9");
                                if(dots.style.display==="none"){
                                    dots.style.display="inline";
                                    btntext.innerHTML="Read more";
                                    moretext.style.display="none";
                                    
                            
                            
                                }
                                else{
                                    dots.style.display="none";
                                    btntext.innerHTML="Read less";
                                    moretext.style.display="inline";
                                }}   
