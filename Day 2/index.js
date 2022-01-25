let firstName = "Viraj" ;
let lastName = "Ghatge" ;
let fullName = firstName + " " +lastName ;
console.log(fullName)

let greeting = " Hello there"

function greet() {
 let msg = fullName + greeting + " !"
 console.log(msg)
}

greet();

let myPoints = 3;

function add3Points() {
myPoints += 3;
}

function remove1Point() {
 myPoints -= 1;
}

add3Points();
add3Points();
remove1Point();
remove1Point();
add3Points();
console.log(myPoints)


let err = document.getElementById("error")

function error() {
  err.textContent = "Something went wrong, please try again" 
}


let num1 = 9
let num2 = 7

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

function add() {
 document.getElementById("sum-el").textContent = "Sum:"
 let temp = num1 + num2
document.getElementById("sum-el").textContent += temp

}

function sub() {
 document.getElementById("sum-el").textContent = "Subtraction:"
 let temp = num1 - num2
document.getElementById("sum-el").textContent += temp

}

function div() {
 document.getElementById("sum-el").textContent = "Division:"
 let temp = num1/num2
document.getElementById("sum-el").textContent += temp

}

function mul() {
 document.getElementById("sum-el").textContent = "Multiplication:"
 let temp = num1*num2
document.getElementById("sum-el").textContent += temp

}