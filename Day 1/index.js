let count = 0
let ch = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment() {
count =count + 1
ch.textContent = count
}

function save () {
 let old = count + " - "
 saveEl.textContent = saveEl.textContent + old
 ch.textContent = 0
 count = 0
}




