const welcomeEl = document.getElementById("welcome-el")

function greeting(greet, name,emoji){
 welcomeEl.textContent = `${greet}  ${name} ${emoji}`
}

greeting("Hello", "Avechure",":)")



function add(num1,num2){
 return num1 + num2
}
console.log(add(3,4))
console.log(add(9,102))

function getFirst(arr){
return arr[0]
}

console.log(getFirst([2,5,3,3,7]))



const player = "ave"
const opponent = "ven"
const game = "AmazingFighter"
let points = 0
let hasWon = false

points += 100
hasWon = true

if (hasWon){
 console.log(`${player} got ${points} points and won the ${game} game!`)
} else{
 console.log(`The winner is ${opponent}! ${player} lost the game`)
}

let myCourses = ["Learn CSS Animations","UI Design Fundamentals","Intro to Clean Code"]

function showArray(arr){
  for (let i=0; i < arr.length ;++i){
   console.log(arr[i])
  }
}

showArray(myCourses)


// localStorage.setItem("Save","hello there")
console.log(localStorage.getItem("Save"))


let data = [
 {
  ply:"Ave",
  score:52
 },
 {
  ply:"Mark",
  score: 41
 }
]

const scoreBtn = document.getElementById("score-btn")

scoreBtn.addEventListener("click",function(){
 console.log(data[0].score)
})

function generateSentence(desc,arr){
 let str =""
 const lastIndex = arr.length -1
 for (let i =0; i< arr.length ; ++i){
  if (i == lastIndex){
   str += arr[i]
  }else{
   str += arr[i] + ","

  }
 }
 return `The ${arr.length} ${desc} are ${str}`
}

console.log(generateSentence("largest countries",["China","India","USA"]))

console.log(generateSentence("best fruits",["Apple","Bananas"]))