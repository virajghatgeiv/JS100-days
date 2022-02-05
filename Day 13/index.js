

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

  remove(data){
    const removeNode = function(node,data){
      if(node == null){
        return null
      }
      if(node.data == data){
        if(node.left == null && node.right == null){
          return null
        }
        if(node.left == null){
          return node.right
        }
        if(node.right == null){
          return node.left
        }
        let tempNode = node.right
        while(tempNode.left != null){
          tempNode = tempNode.left
        }
        node.data = tempNode.data
        node.right = removeNode(node.right,tempNode.data)
        return node
        } else if(node.data>data){
        // left child
          node.left = removeNode(node.left,data)
          return node
      } else{
        // right child
          node.right = removeNode(node.right,data)
          return node
      }
    }
    this.root = removeNode(this.root,data)
  }
  isBalance(){
    return (this.findMinHeight() >= this.findMaxHeight() - 1)
  }
  findMinHeight(node = this.root){
    if(node == null){
      return -1
    }
    let left = this.findMinHeight(node.left)
    let right = this.findMinHeight(node.right)
    if(left < right){
      return left + 1
    } else {
      return right + 1
    }
  }
  findMaxHeight(node = this.root){
    if(node == null){
      return -1
    }
    let left = this.findMinHeight(node.left)
    let right = this.findMinHeight(node.right)
    if(left > right){
      return left + 1
    } else {
      return right + 1
    }
  }
  }

let gg = new BST()
gg.add(9);
gg.add(4);
gg.add(17);
gg.add(3);
gg.add(6);
gg.add(22);
gg.add(5);
gg.add(7);
gg.add(20);
console.log(gg.findMinHeight());
console.log(gg.findMaxHeight());
console.log(gg.isBalance());
gg.add(10);
console.log(gg.findMinHeight());
console.log(gg.findMaxHeight());
console.log(gg.isBalance());



