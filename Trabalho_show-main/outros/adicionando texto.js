function clicar(){
var cod = ["rgb(255, 0, 0)",  "rgb(93, 16, 235)", "rgb(16, 235, 16)",  "rgb(255, 255, 0)",  "rgb(47, 0, 255)"] 
const novo = document.createElement("h1")
novo.innerHTML = cod[0]
document.getElementById("botao").append(novo)
}


/*function clicar(){
   for(let id = 1; id <= 5; id++){
       const par = document.getElementById(id.toString());
       par.style.color = cod[id -1]
   }
   
}
*/