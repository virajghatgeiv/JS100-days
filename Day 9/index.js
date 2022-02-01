// implementation of queue
// methods print, enqueue, dequeue, front, size,isEmpty


function Queue(){
 this.collection = []
 
 this.print = function(){
  console.log(this.collection)
 }

 this.enqueue = function(element){
  this.collection.push(element)
 }

 this.dequeue = function(){
  return this.collection.shift()
 }

 this.front = function(){
  return this.collection[0]
 }

 this.size = function(){
  return this.collection.length
 }

 this.isEmpty = function(){
  return (this.collection.length === 0)
 }
}


let myQueue = new Queue()
let mygg = new Queue()

myQueue.enqueue(1)
myQueue.enqueue(2)
myQueue.enqueue(3)
myQueue.enqueue(4)
myQueue.print()
console.log(myQueue.front())
console.log(myQueue.dequeue())
console.log(myQueue.front())
console.log(myQueue.size())
console.log(myQueue.isEmpty())
console.log(mygg.isEmpty())


// implementation of priority queue
// methods print, enqueue, dequeue, front, size,isEmpty

function Pqueue () {
 let collection = []

 this.print = function(){
  console.log(collection)
 }

 this.enqueue = function(element){
  if(this.isEmpty()){
   collection.push(element)
  } else {
   let saved = false
   for(let i = 0; i<collection.length ; i++){
    if(element[1]<collection[i][1]){
     collection.splice(i,0,element)
     saved = true
     break
    }
   }
   if(!saved){
    collection.push(element)
   }
  }
 }

 this.dequeue = function(){
  let value = collection.shift()
  return value[0]
 }

 this.front = function(){
  return collection[0]
 }

 this.size = function(){
  return collection.length
 }

 this.isEmpty = function(){
  return (collection.length === 0)
 }



}

let pQ = new Pqueue()
let pQ1 = new Pqueue()
pQ.enqueue(['Lowest',4])
pQ.enqueue(['Medium',2])
pQ.enqueue(['Medium',2])
pQ.enqueue(['Highest',1])
pQ.print()
console.log(pQ.front())
console.log(pQ.dequeue())
console.log(pQ.front())
console.log(pQ.size())
console.log(pQ.isEmpty())
console.log(pQ1.isEmpty())



