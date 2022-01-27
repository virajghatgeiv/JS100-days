// object creation practice


let course = {
 title: "learn CSS Grid for free",
 lessons: 16,
 creator : "Per Harald Borgen" ,
 lenght: 63,
 level: 2,
 isFree : true,
 tags: ["html","css"]
}

let airbnbCastle = {
 isBuffet : true,
 name : "Avechure's castle" ,
 rating : 4,
 complimentaryFeatures : ["swing Pool" , "GYM"]
}

let person = {
 name : "Avechure",
 age : 22,
 conuntry : "India"
}

function logData() {

 console.log(person.name + " is " + person.age + " year old and lives in " + person.conuntry)
}

// logData()

// if else statement practice

let age = 67

if(age < 6){
 // console.log("Free ride")
}
else if (age<=17){
 // console.log("Child Discount")
}
else if (age <=26 ){
 // console.log("Student Discount")
}
else if (age <=66 ){
 // console.log("Full price")
}
else {
 // console.log("Senior citizen Discount")
}


//loop and array practice

/*let largeCountries = ["China","India","USA","Indonesia","Russia"]
console.log("The largest countries in the world")
for(let i =0 ; i < largeCountries.length;i++)
{
console.log("- " + largeCountries[i])
 
}*/


// Push, POP, unshift, shift practice

/*let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

largeCountries.pop()
largeCountries.push("Russia")
largeCountries.shift()
largeCountries.unshift("China")
console.log(largeCountries) */



// logical operators

let dayOfMonth =13
let weekday = "Friday"

if (dayOfMonth ===13 && weekday === "Friday"){
 // console.log("😨")
}

//rock,paper scissor challenge
let hands = [ "rock", "paper","scissor"]

function handSign() {
 let index = Math.floor(Math.random()*3)
 return hands[index]
}
// console.log(handSign())


let fruit = ["🍎","🍊","🍎","🍎","🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

function sortFruit() {
  for (let i = 0 ; i < fruit.length ; i++){
 if (fruit[i] === "🍎"){
  appleShelf.textContent += appleShelf.textContent = fruit[i] + "  " 
 
  console.log(appleShelf)
 }
 else{
  orangeShelf.textContent +=  orangeShelf.textContent = fruit[i] + "  " 
  console.log(orangeShelf)
 }
}
}
sortFruit()
