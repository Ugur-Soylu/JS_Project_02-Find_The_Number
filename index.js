const myNumber = Math.round(Math.random() * 100);
const check = document.getElementById("button");
let counter = 0;

console.log(myNumber)
const checkNumber = function () {
let input = document.querySelector("#input").value;
document.getElementById("input").value = "";   
if (isNaN(input) || input < 1 || input > 100 || input == "" ){
    document.getElementById("return").innerHTML = `<h3>Please enter only a number between 1 and 100 ! </h3>`;
}else{            
    if (counter >= 8) {
        document.getElementById("return").innerHTML = "<h3>Sorry, you're out of guessing 😢</h3>"
    }else if (input < myNumber){
        document.getElementById("return").innerHTML = "<h3>Incorrect, Up!</h3>";
        counter++;
                    
    }else if (input > myNumber){
        document.getElementById("return").innerHTML = "<h3>Incorrect, Down!</h3>"
        counter++;
                    
    }else if (input == myNumber){
        document.getElementById("return").innerHTML = "<h2>Congrats! Are you a mind reader?</h2>"
        counter++;        
    }
    document.querySelector("span").innerHTML = counter;  
}}

check.addEventListener("click", checkNumber);

const reload = document.querySelector("#replay");
reload.addEventListener("click", () => {window.location.reload(false)})

