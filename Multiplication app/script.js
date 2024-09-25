const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);
// const multi = "multiply";
// const add = "add";
// const subtract = "subtract";
// const divide = "divide";

var arr = ["multiplied by", "added to", "minus", "divided by"];

const questionEl = document.getElementById("question");

const inputEl = document.getElementById("input");

const formEl = document.getElementById("form");

const scoreEl = document.getElementById("score")

let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score = 0;
}

scoreEl.innerText = `score: ${score}`

var method = arr[Math.floor(Math.random()*4)];
let correctAns
questionEl.innerText = `What is ${num1} ${method} ${num2}?`;  
if(method == "multiplied by"){
  correctAns = num1 * num2;
}
else if(method == "added to"){
  correctAns = num1 + num2;
}
else if(method == "minus"){
    if(num1 > num2){
        num1 = num1 * num2;
        correctAns = num1 - num2;
    }else{
        correctAns = num1 - num2;
    }
}
else if(method == "divided by"){
  if(num1 > num2){
    num1 = num1 * num2;
    correctAns = num1 / num2;
  }else{
    correctAns = num1 / num2;
  }
}


formEl.addEventListener("submit", ()=>{
    const userAns = +inputEl.value;
    if (userAns === correctAns) {
        score++;
        updateLocalStorage()
    }else{
        score--;
        updateLocalStorage()
    }
});

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
}
 
 