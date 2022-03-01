
// const depthFirstSearch = (graph,source) =>{
//  const stack = [source]
//  while( stack.length > 0){
//   const current = stack.pop()
//   console.log(current)
//   for(let neighbour of graph[current]){
//    stack.push(neighbour)
//   }
//  }
// }

// const depthFirstSearch = (graph,source) =>{
//  console.log(source)
//  for (let neighbour of graph[source]){
//   deapthFirstSearch(graph,neighbour)
//  }
// }

const breathFirstSearch = (graph,source) =>{
 const queue = [source]
 while(queue.length > 0){
  const current = queue.shift()
  console.log(current)
  for(let neighbour of graph[current]){
   queue.push(neighbour)
  }
 }
}


const graph = {
 a:['b','c'],
 b:['d'],
 c:['e'],
 d:['f'],
 e:[],
 f:[]

}

// depthFirstSearch(graph,'a')
breathFirstSearch(graph,'a')