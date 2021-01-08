var obstac1 = document.getElementById("obs1");
var obstac2 = document.getElementById("obs2");
var character = document.getElementById("charac");
var scores = 0;
obstac1.addEventListener('animationiteration', ()=>{
    let x = Math.floor(Math.random()*100-20);
if(x<20){
    x=20;
    x+=Math.floor(Math.random()*20);
}
    obstac1.style.height = x + "px";
    scores++;
});

obstac2.addEventListener('animationiteration', ()=>{
    let x = Math.floor(Math.random()*100-20);
if(x<20){
    x=20;
    x+=Math.floor(Math.random()*20);
}
    obstac2.style.height = x + "px";
    scores++;
});

function skip(){
    var characterbottom = parseInt (window.getComputedStyle(character).getPropertyValue("bottom"));
    if(characterbottom <= 80){
    var jumpcount = 0;   
    var jumpinterval = setInterval(()=>{    
            if(jumpcount <8){character.style.bottom = characterbottom +10 + "px";}
            characterbottom = parseInt (window.getComputedStyle(character).getPropertyValue("bottom"));
            jumpcount++;
            if(jumpcount >=8) {
                   jumpcount=0;
                   clearInterval(jumpinterval) ;
                }
        } ,10);  
    }  
}

var scores = 0;
var gravity = setInterval(()=>{
    var charright = 25+30;
    var charrleft = 25;
    var obstac1left = parseInt (window.getComputedStyle(obstac1).getPropertyValue("left"));
    var obstac2left = parseInt (window.getComputedStyle(obstac2).getPropertyValue("left"));
    var obstac1top = parseInt (window.getComputedStyle(obstac1).getPropertyValue("height"));
    var obstac2top = parseInt (window.getComputedStyle(obstac2).getPropertyValue("height"));
    var obstac1rigth = obstac1left + 50;
    var obstac2rigth = obstac2left + 50;
    var characterbottomgravity = parseInt (window.getComputedStyle(character).getPropertyValue("bottom"));
    
    
    if(   charright > obstac1left && characterbottomgravity < obstac1top && charrleft < obstac1rigth
       || charright > obstac2left && characterbottomgravity < obstac2top && charrleft < obstac2rigth
    ){
        clearInterval (gravity);
        document.getElementById("tst").innerHTML = "game over, you stepped: " + scores;
        scores = 0;
        obstac1.style.left= obstac1left + "px";
        obstac1.style.animation = "none";
        obstac2.style.left= obstac2left + "px";
        obstac2.style.animation = "none";
    }

else{
    if(characterbottomgravity > 0){
            character.style.bottom = (characterbottomgravity-1.5) +"px";
            characterbottomgravity = parseInt (window.getComputedStyle(character).getPropertyValue("bottom"));
    }
    if (characterbottomgravity == 0) {characterbottomgravity = characterbottomgravity;}
    document.getElementById("tst").innerHTML = "You Stepped: " + scores;
}
} ,10);

var clod1 = document.getElementById("clod1");
var clod2 = document.getElementById("clod2");
var clod3 = document.getElementById("clod3");

clod1.addEventListener("animationiteration" , () =>{

    let x = (Math.floor(Math.random()*100)-50);
    if(x<0)x+=50;
    clod1.style.top =  x + "px";
}
);

clod2.addEventListener("animationiteration" , () =>{

    let x = (Math.floor(Math.random()*100)-50);
    if(x<0)x+=50;
    clod2.style.top =  x + "px";
}
);

clod3.addEventListener("animationiteration" , () =>{

    let x = (Math.floor(Math.random()*100)-50);
    if(x<0)x+=50;
    clod3.style.top =  x + "px";
}
);


function tryagainfunc(){
    location.reload();
}
