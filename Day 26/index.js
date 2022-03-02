// const hasPath = (graph,src,dst) => {
//  if (src == dst){
//   return true
//  }
//  for(let neighbour of graph[src]){
//   if(hasPath(graph,neighbour,dst) == true){
//    return true
//   }
//  }
//  return false
// }


const hasPath = (graph,src,dst) => {
 const queue = [src]

 while(queue.length > 0){
  
  const current = queue.shift()
  if (current == dst){
   return true
  }
  for(let neighbour of graph[current]){
   queue.push(neighbour)
  }
 }
 return false
}


const graph = {
 f:['g','i'],
 g:['h'],
 h:[],
 i:['g','k'],
 j:['i'],
 k:[]
}

console.log(hasPath(graph,'f','k'))
