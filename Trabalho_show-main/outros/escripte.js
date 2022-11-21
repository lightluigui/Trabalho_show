
var cod = ["rgb(255, 0, 0)",  "rgb(93, 16, 235)", "rgb(16, 235, 16)",  "rgb(255, 255, 0)",  "rgb(47, 0, 255)"] 


function clicar(){
   for(let id = 1; id <= 5; id++){
       const par = document.getElementById(id.toString());
       par.style.color = cod[id -1]
   }
}