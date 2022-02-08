// stack
const Stack = function(){
 this.count = 0
 this.store ={}

 this.push= function(element){
  this.store[this.count] = element
  this.count++
 }

 this.pop = function(){
  if(this.count === 0){
   return undefined
  } else {
   let result = this.store[this.count-1]
   delete this.store[this.count-1]
   this.count--
   
   sizeRp.innerHTML = `<p>Size of stack: ${myStack.length()} Element: ${result}</p>`
   return result
  }
 }

 this.peek = function(){
  return this.store[this.count-1]
 }

this.length = function(){
 return this.count
}
}

const myStack = new Stack()
const pushBtn = document.getElementById("push-btn")
const popBtn = document.getElementById("pop-btn")
const inputEl = document.getElementById("input-el")
const stackRp = document.getElementById("stack-rp")
const sizeRp = document.getElementById("size-rp")
const stackFromLocalStorage = JSON.parse(localStorage.getItem(("stack")))
let temp = myStack


if(stackFromLocalStorage){
temp = stackFromLocalStorage
render()
}

pushBtn.addEventListener("click",function(){
 myStack.push(inputEl.value)
 temp = myStack
 inputEl.value = ""
 localStorage.setItem("stack",JSON.stringify(temp))
 render()
})


popBtn.addEventListener("click",function(){
 myStack.pop()
 temp = myStack
 localStorage.clear()
 localStorage.setItem("stack",JSON.stringify(temp))
 render()
})



function render(){
 let listItems = ""
 for(let i = 0; i < temp.length ; ++i){
 
 listItems += `<li>${temp.store[i]}</li>`
 
}
stackRp.innerHTML = listItems
}







