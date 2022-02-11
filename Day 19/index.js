// linkedList
// methods length, head, add

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

