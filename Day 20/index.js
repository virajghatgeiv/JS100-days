// linkedList
// methods length, head, add, remove

 function linkedList(){
  let length = 0
  let head = null
 
 let Node = function(element){
  this.element = element
  this.next = null
 }

 this.size = function(){
  return length
 }

 this.head = function(){
    return head
 }


 this.add = function(element){
  let node = new Node(element)
  if(head === null){
   head = node
  } else {
   let currentNode = head
   while(currentNode.next){
    currentNode = currentNode.next
   }
   currentNode.next = node
  }
  length++
 }

 this.remove = function(element){
  let currentNode = head
  let previousNode
  
  if(currentNode.element === element){
   head = currentNode.next
  } else {
   
     while(currentNode.element !== element){
      previousNode = currentNode
      currentNode = currentNode.next
  

     }
   previousNode.next = currentNode.next
  }
  length--
 }

 this.isEmpty = function(){
    return length === 0
 }

 this.indexOf = function(element){
   let currentNode = head
   let index = -1
   while(currentNode){
      index++
      if(currentNode.element === element){
         return index
      }
      currentNode = currentNode.next
   }
   return -1
 }

 this.elementAt = function(index){
    let currentNode = head
    let count = 0
    while(count < index){
       count++
       currentNode = currentNode.next
    }
    return currentNode.element
 }

 this.addAt = function(index,element){
    let node = new Node(element)
    let currentNode = head
    let previousNode 
    let currentIndex = 0
    
    if(index > length){
       return false
    }
    if(index === 0){
       node.next = currentNode
       head = node
    } else {
       while(currentIndex < index){
          currentIndex++
          previousNode = currentNode
          currentNode = currentNode.next
       }
       node.next = currentNode
       previousNode.next = node
    }
    length++
 }

 this.removeAt = function(index){
    let currentNode = head
    let previousNode 
    let currentIndex = 0
    
    if(index < 0 || index >= length){
       return null
    }
    if(index === 0){
       head = currentNode.next
    } else {
       while(currentIndex < index){
          currentIndex++
          previousNode = currentNode
          currentNode = currentNode.next
       }
       previousNode.next = currentNode.next
    }
    length--
    return currentNode.element
 }
}

let nl = new linkedList()
console.log(nl.head())
console.log(nl.size())
nl.add(45)
nl.add(46)
nl.add(47)
nl.add(48)
console.log(nl.size())
nl.remove(45)
nl.remove(46)
nl.remove(47)
nl.remove(48)
console.log(nl.head())
console.log(nl.isEmpty())
nl.add(45)
nl.add(46)
nl.add(47)
nl.add(48)
console.log(nl.indexOf(46))
console.log(nl.elementAt(2))
nl.addAt(2,67)
console.log(nl.elementAt(2))
console.log(nl.removeAt(2))
console.log(nl.elementAt(2))



