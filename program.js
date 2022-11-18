const button = document.querySelector('button')
button.addEventListener('click', function(){
    const audio =document.querySelector('audio')
    audio.currentTime = 2
    audio.play()
})
