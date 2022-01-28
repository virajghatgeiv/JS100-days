let boxEl = document.getElementById("box")
let container = document.getElementById("container")

boxEl.addEventListener("click",function(){
 
 console.log("I want to open the box!")
})

container.innerHTML = "<button id='btn'> Buy!</button>"

let bTn = document.getElementById("btn")

bTn.addEventListener("click",function(){

 container.innerHTML += "<p>Thank you for buying!</p>"
})

