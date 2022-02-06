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

pushBtn.addEventListener("click",function(){
 myStack.push(inputEl.value)
 inputEl.value = ""
 render()
})


popBtn.addEventListener("click",function(){
 myStack.pop()
 render()
})



function render(){
 let listItems = ""
 for(let i = 0; i < myStack.length() ; ++i){
 
 listItems += `<li>${myStack.store[i]}</li>`
 
}
stackRp.innerHTML = listItems
sizeRp.innerHTML = `<p>Size of stack: ${myStack.length()}</p>`
}







