// stacks
// function: push, pop, peek, length
// using array as stack

let letters =[]
let word = "viraj"
let rword = ""

for (let i = 0; i<word.length; ++i){
 letters.push(word[i])
}

for (let i = 0; i<word.length; ++i){
 rword += letters.pop()
}

if (rword === word){
 console.log(`${word} is palindrome`)
} else {
 console.log(`${word} is not palindrome`)
}


// implementing stack 

const Stack = function(){
 this.count = 0
 this.storage = {}

 this.push = function(val){
  this.storage[this.count] = val
  this.count++
 }

 this.pop = function(){
  
   if (this.count === 0){
    return undefined
   }
   let result =this.storage[this.count-1]
   delete this.storage[this.count-1]
   this.count--
   return result
 }

 this.peek = function(){
  return this.storage[this.count-1]
 }

this.size = function(){
 return this.count
}

}


const myStack = new Stack()

myStack.push("hello")
console.log(myStack.peek())
myStack.push(67)
console.log(myStack.peek())
console.log(myStack.size())
console.log(myStack.pop())
console.log(myStack.size())
console.log(myStack.pop())


// Implementation of sets and methods add, remove, values, union, intersection, difference, subset


const mySet = function(){
 this.collection = []

 this.has = function(e){
  if (this.collection.indexOf(e)!== -1){
   return true
  }
  return false
 }


 this.add = function(e){
  if(!this.has(e)){
   this.collection.push(e)
   return true
  }
  return false
 }

 this.remove = function(e){
  if(this.has(e)){
   index = this.collection.indexOf(e)
    this.collection.splice(index,1)
    return true
  }
  return false
 }


 this.values = function(){
  return this.collection
 }

this.union = function(otherSet){
 unionSet = new mySet()
 firstSet = this.values()
 secondSet = otherSet.values()
 firstSet.forEach(function(e){
  unionSet.add(e)
 })
 secondSet.forEach(function(e){
  unionSet.add(e)
 })
 return unionSet
}

this.intersection = function(otherSet){
  intersectionSet = new mySet()
  firstSet = this.values()

  firstSet.forEach(function(e){
    if(otherSet.has(e)){
     intersectionSet.add(e);
    }
})
return intersectionSet
}

this.difference = function(otherSet){
 differenceSet = new mySet()
 firstSet = this.values()
 
 firstSet.forEach(function(e){
  if(!otherSet.has(e)){
   differenceSet.add(e);
  }
 })
 
 return differenceSet
}


this.subset = function(otherSet){
 firstSet = this.values()
 return firstSet.every(function(value){
   return otherSet.has(value)
 })
}

}

let setA = new mySet();
let setB = new mySet();
setA.add("a")
setB.add("b")
setB.add("c")
setB.add("a")
setB.add("d")
console.log(setA.union(setB).values())
console.log(setA.intersection(setB).values())
console.log(setB.difference(setA).values())
console.log(setA.subset(setB))
setB.add("t")
console.log(setB.values())
setB.remove("d")
console.log(setB.values())






