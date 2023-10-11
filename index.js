
function  bubbleform(){
    let cluster=""

for( let i=0;i<=160;i++){
    let number=Math.floor(Math.random()*10)

    
    cluster +=`<div class="bubble">${number}</div>`

}
document.querySelector(".another-child").innerHTML=cluster;
}


let rn=0;

function hitbutotn(){
    rn= Math.floor(Math.random()*10);
   document.querySelector("#Hit").textContent=rn;
    
}
scoremaan=document.querySelector("#scoreval")
score=0;
function scoreboard(){
    score+=10;
    scoremaan.innerHTML=score;
  
}


var pbtm = document.querySelector(".another-child")
pbtm.addEventListener("click",function(dets){
         var numberhit=Number(dets.target.textContent)
         if(rn==numberhit){
            scoreboard();
            bubbleform();
            hitbutotn()


         }
         else{
            console.log("nothing happen")
         }
    })
    let timer = 30;
function clock(){
    var timeint=setInterval(function () {
        if(timer > 0){
            timer--;
            document.querySelector('#samay').textContent=timer;

        }
        else{
            clearInterval(timeint);
            document.querySelector(".another-child").innerHTML=` <div class="output">
            <h1>Game Over</h1>
            <h4>
                Your Score is ${score}
            </h4>
        </div>`
        

        }
        
    },1000);

}
clock();    
bubbleform();
hitbutotn();
