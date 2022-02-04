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
  this.left = left || null
  this.right = right || null
 }
}

class BST {
  constructor(){
    this.root = null
    }

  add(data){
     const searchTree = function(n1){
        if(data<n1.data){
          if(n1.left === null){
            n1.left =new Node(data)
            return
          } else if( n1.left !== null){
            return searchTree(n1.left)
          }
        } else if(data>n1.data){
          if(n1.right === null){
            n1.right = new Node(data)
          } else if(n1.right !== null){
            return searchTree(n1.right)
            }
          }else {
            return null
          }
        }
    if (this.root === null){
        this.root = new Node(data)
        return
      } else {
        return searchTree(this.root)
      } 
    }
  findMin(){
    let current = this.root
    while(current.left !== null){
      current = current.left
    }
    return current.data
  }

  findMax(){
    let current = this.root
    while(current.right !== null){
      current = current.right
    }
    return current.data
  }

  find(data){
    let current = this.root
    while(current.data !== data){
      if(current.data > data){
        current = current.left
      }
      else{
        current = current.right
      }
      if(current == null){
        return null
      }
    }
    return current
  }
  isPresent(data){
    let current = this.root
    while(current.data !== data){
      if(current.data > data){
        current = current.left
      }
      else{
        current = current.right
      }
      if (current == null){
        return false
      }
    }
    return true
  }
  }

let gg = new BST()
gg.add(5)
gg.add(7)
gg.add(2)
gg.add(9)
gg.add(6)
gg.add(1)
gg.add(4)
console.log(gg)
console.log(gg.findMin())
console.log(gg.findMax())
console.log(gg.find(4))
console.log(gg.isPresent(6))


