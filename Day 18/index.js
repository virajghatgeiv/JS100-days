// Hash table

let hash = (string,max) => {
  let  hash = 0
  for (let i = 0 ; i< string.length ; ++i){
    hash += string.charCodeAt(i)
  }
  return hash % max
}


let hashTable = function(){
  this.storage = []
  const storageLimit = 4

  this.print = function(){
    console.log(this.storage)
  }

  this.add = function(key,value){
    let index = hash(key,storageLimit)
    if(this.storage[index] === undefined){
      this.storage[index] = [key,value]
    } else {
      let inserted = false
      for(let j= 0; j<this.storage[index].length; j++){
        if(this.storage[index][j][0] === key){
        this.storage[index][j][1] = value
        inserted = true
        }
      }
      
      
      if(inserted === false){
        this.storage[index].push([key,value])
      }
    }
  }

  this.remove = function(key){
    let index = hash(key,storageLimit)
    if(this.storage[index].length === 1 && this.storage[index][0][0] === key){
      delete this.storage[index]
    } else {
      for(let i = 0; i < this.storage[index].length ; i++){
        if(this.storage[index][i][0] === key){
          delete this.storage[index][i]
        }
      }
    }
  }

  this.lookup = function(key){
    let index = hash(key,storageLimit)
    if(this.storage[index] === undefined){
      return undefined
    } else{
      for(let i= 0 ; i <this.storage[index].length;++i){
        if(this.storage[index][i][0] === key){
          return this.storage[index][i][1]
        }
      }
    }
  }


}

let hT = new hashTable()

hT.add('bbbbbbbbb',6666666666)
hT.print()
hT.add('bbbbbbbbb',7777777777)
hT.print()
hT.add('c',8888888888)
hT.print()
console.log(hash('',4))
console.log(hT.lookup('bbbbbbbbb'))


