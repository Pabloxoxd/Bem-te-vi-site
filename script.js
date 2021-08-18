var sobre = document.getElementById("sobre")
var hiddenHead = document.querySelector('div.hiddenHead')
var undoBtn = document.querySelector('input.undo')


sobre.addEventListener("click", clicker)
undoBtn.addEventListener("click", undo)


function clicker(){
    sobre.style.display = "none" 
    hiddenHead.style.display = "block" 
}

function undo (){
    sobre.style.display = "block" 
    hiddenHead.style.display = "none" 
}


