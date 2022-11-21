
function tocar1(){
    var audio = new Audio('abyss.wav');
    audio.play();
}

function tocar2(){
    var audio = new Audio('nameless.wav');
    audio.play();
}

function tocar3(){
    var audio = new Audio('lobao.wav');
    audio.play();
}

function tocar4(){
    var audio = new Audio('cinder.wav');
    audio.play();
}

function tocar5(){
    var audio = new Audio('yhorm.wav');
    audio.play();
}


function tocar6(){
    var audio = new Audio('abyss.wav');
    audio.play();
}

function tocar7(){
    var audio = new Audio('dragon.wav');
    audio.play();
}

function tocar8(){
    var audio = new Audio('reis.wav');
    audio.play();
}

function tocar9(){
    var audio = new Audio('gael.wav');
    audio.play();
}

function tocar10(){
    var audio = new Audio('gwyn.wav');
    audio.play();
}


function tocar11(){
    var audio = new Audio('nito.wav');
    audio.play();
}

function tocar12(){
    var audio = new Audio('sulivan.wav');
    audio.play();
}

function rodrigofaro(){
    var audio = new Audio('Efeitos.wav');
    audio.play();
}




//funçao criada para quando clicar no botao indice apareça os tiers
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

function passarmouse1(imagem) {  
    imagem.src="gundao2.jpg";   
}
function tirarmouse1(imagem) { 
    imagem.src="gundao.jpg";
}

function passarmouse2(imagem) {  
    imagem.src="namless2.jpg";   
}
function tirarmouse2(imagem) { 
    imagem.src="nameless.jpg";
}

function passarmouse3(imagem) {  
    imagem.src="sif2.jpg";   
}
function tirarmouse3(imagem) { 
    imagem.src="sif.jpg";
}

function passarmouse4(imagem) {  
    imagem.src="soulofcinder2.jpg";   
}
function tirarmouse4(imagem) { 
    imagem.src="soulofcinder.jpg";
}

function passarmouse5(imagem) {  
    imagem.src="yhorm2.jpg";   
}
function tirarmouse5(imagem) { 
    imagem.src="yhorm.jpg";
}

function passarmouse6(imagem) {  
    imagem.src="abyss2.jpg";   
}
function tirarmouse6(imagem) { 
    imagem.src="abyss.jpg";
}

function passarmouse7(imagem) {  
    imagem.src="dragaoanciao2.jpg";   
}
function tirarmouse7(imagem) { 
    imagem.src="dragaoanciao.jpg";
}

function passarmouse8(imagem) {  
    imagem.src="fourkings2.jpg";   
}
function tirarmouse8(imagem) { 
    imagem.src="fourkings.jpg";
}

function passarmouse9(imagem) {  
    imagem.src="gael2.jpg";   
}
function tirarmouse9(imagem) { 
    imagem.src="gael.jpg";
}

function passarmouse10(imagem) {  
    imagem.src="gwyn2.jpg";   
}
function tirarmouse10(imagem) { 
    imagem.src="gwyn.jpg";
}

function passarmouse11(imagem) {  
    imagem.src="nito2.jpg";   
}
function tirarmouse11(imagem) { 
    imagem.src="nito.jpg";
}

function passarmouse12(imagem) {  
    imagem.src="pontifice2.jpg";   
}
function tirarmouse12(imagem) { 
    imagem.src="pontifice.jpg";
}

function passarmouseM(imagem) {  
    imagem.src="matheus-foto.jpg";   
}
function tirarmouseM(imagem) { 
    imagem.src="matheus-foto.jpeg";
}

function passarmouseS(imagem) {  
    imagem.src="sensual2.jpg";   
}
function tirarmouseS(imagem) { 
    imagem.src="sensual.jpg";
}
