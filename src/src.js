
let sign = "x";
let disp = document.getElementById("player");
let isko;


function printx(number){
    let isko = document.getElementById("r"+number);
  console.log(isko);
  
  if(isko.innerText==""){
  isko.innerText=sign;
  winner();
  checksign();
 disp.innerHTML="<center>"+ sign + " 👉 your turn ⬇️"+"</center>";
 
  }
  
  
}
function checksign(){
    if(sign=="x")sign ="o";
    else sign = "x";
   
}
function getbox(no){
    return document.getElementById("r"+no).innerHTML;
}
function checkmove(a,b,c,m){
    if(getbox(a)==m && getbox(b)==m && getbox(c)==m)
       return true;
    else return false;   
}

function winner(){
if(checkmove(1,2,3,sign)||checkmove(4,5,6,sign)||checkmove(7,8,9,sign)
    ||checkmove(1,4,7,sign)||checkmove(2,5,8,sign)||checkmove(3,6,9,sign)
    ||checkmove(1,5,9,sign)||checkmove(7,5,3,sign)){
    disp.innerHTML = "<center>" +sign + " 👑 You're winner! ✌️" + "</center>";
    for(let i=1;i<=9;i++){
        document.getElementById("r"+i).innerHTML="";
    }
   throw "game end";
}else{
    if(getbox(1)!=""&& getbox(2)!=""&& getbox(3)!=""&&
   getbox(4)!=""&& getbox(5)!=""&& getbox(6)!=""&&
   getbox(7)!=""&& getbox(8)!=""&& getbox(9)!=""){

    disp.innerHTML = "<center> its a tie 😮‍💨 </center>";
       throw "its a tie";
   }
}
}