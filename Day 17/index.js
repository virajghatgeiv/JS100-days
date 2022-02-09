

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
    let left = this.findMaxHeight(node.left)
    let right = this.findMaxHeight(node.right)
    if(left > right){
      return left + 1
    } else {
      return right + 1
    }
  }
  inOrder(){
    if(this.root == null){
      return null
    } else {
      let result = new Array()
      function traverseInOrder(node){
        node.left && traverseInOrder(node.left)
        result.push(node.data)
        node.right && traverseInOrder(node.right)
      }
      traverseInOrder(this.root)
      return result
    }
  }

  preOrder(){
    if(this.root == null){
      return null
    } else {
      let result = new Array()
      function traversePreOrder(node){
        result.push(node.data)
        node.left && traversePreOrder(node.left)
        node.right && traversePreOrder(node.right)
      }
      traversePreOrder(this.root)
      return result
    }
  }

  postOrder(){
    if(this.root == null){
      return null
    } else {
      let result = new Array()
      function traversePostOrder(node){
        node.left && traversePostOrder(node.left)
        node.right && traversePostOrder(node.right)
        result.push(node.data) 
      }
      traversePostOrder(this.root)
      return result
    }
  }


  levelOrder(){
    let result = []
    let Q = []
    if(this.root != null){
      Q.push(this.root)
      while(Q.length > 0){
        let node = Q.shift()
        result.push(node.data)
        if(node.left != null){
          Q.push(node.left)
        }
        if(node.right != null){
          Q.push(node.right)
        }

      }
      return result
    } else {
      return null
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
gg.add(10);
console.log("inOder:" + gg.inOrder())
console.log("preOder:" + gg.preOrder())
console.log("postOder:" + gg.postOrder())
console.log("levelOder:" + gg.levelOrder())

// Hash table

let hash = (string,max) => {
  let  hash = 0
  for (let i = 0 ; i< string.length ; ++i){
    hash += string.charCodeAt(i)
  }
  return hash % max
}


let hashTable = function(){
  let storage = []
  const storageLimit = 4

  this.print = function(){
    console.log(storage)
  }

  this.add = function(key,value){
    let index = hash(key,storageLimit)
    if(storage[index] === undefined){
      storage[index] = [key,value]
    } else {
      let inserted = false
      if(storage[index][0] === key){
        storage[index][1] = value
        inserted = true
      }
      
      if(inserted === false){
        storage[index].push([key,value])
      }
    }
  }


}

let hT = new hashTable()

hT.add('firstUser',6666666666)
hT.print()
hT.add('secondUser',7777777777)
hT.print()
hT.add('thirdUser',8888888888)
hT.print()



