
function tocar(){
    var audio = new Audio('corre.wav');
    audio.play();
}

function tocar1(){
    var audio = new Audio('videoplayback.mp4');
    audio.play();
}



var clicado = false;
function indices(){
    var tiers = ['tier 1', 'tier 2', 'tier 3', 'tier 4', 'tier 5', 'tier 6', 'sobre']
    if(!clicado){
        const novo = document.createElement("li")
        novo.innerHTML = tiers.slice([-8]).join('<br><li>')
        document.getElementById("add").append(novo)
        clicado = true;
    }
    
}



