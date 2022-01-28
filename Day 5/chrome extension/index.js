let myleads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl =document.getElementById("ul-el")

inputBtn.addEventListener("click", function(){
 
 myleads.push(inputEl.value)
 inputEl.value = ""
 renderLeads()

})

function renderLeads(){
 let listItems = ""
 for(let i = 0; i < myleads.length ; ++i){
 
 listItems += "<li><a target='_blank' href=" + myleads[i] + ">" + myleads[i] + "</a></li>"
 // let li = document.createElement("li")
 // li.textContent = myleads[i]
 // ulEl.append(li)
 
}
ulEl.innerHTML = listItems
}
