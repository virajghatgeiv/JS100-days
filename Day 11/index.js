/*pseudocode for binary tree

**node class creation**
create node class which will have current value, left child and right child


**Binary Tree class creation with add method**
{creat binary tree class which will have root 

need to creat method to add node to binary tree

 {check if root value is null
  then assign directly given value to root
 otherwise check given value is less than root value
  then check if left child value is null
   then assign given value directly to left child
   otherwise call add function again by passing root value as left child and given value
 otherwise check if given value is greater than root value
  then check if right child value is null
   then assign given value directly to right child
  otherwise call add function again by passing root value as right child and given value}
}*/

class Node {
 constructor(data,left,right){
  this.data = data
  this.left = left
  this.right = right
 }
}

class BST {
 constructor(){
  this.root = null
  }

 add(data){
   const node = this.root
  if(node === null){
   this.root = new Node(data);
   return
  } else{
   const searchTree = function(node){
    if(data<node.data){
     if(node.left === null){
      node.left = new Node(data)
      return
     } else if(node.left !== null){
      return searchTree(node.left)
     }
    } else if(data>node.data){
     if(node.right === null){
      node.right = new Node(data)
     }else if(node.right !== null){
      return searchTree(node.right)
     }
    } else {
     return null
    }
   }
   return searchTree(node);
  }
 }
}

let gg = new BST()
gg.add(2)
console.log(gg)
gg.add(5)