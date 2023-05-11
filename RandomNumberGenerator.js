let randomNum = Math.floor((Math.random()*100)+1);
let gussedNum;
let chances = 10;


while(gussedNum != randomNum){
  gussedNum =  prompt("Enter the number: ")
  gussedNum = parseInt(gussedNum);
  if(gussedNum > randomNum){
    console.log("Try again, Actual number is smaller than your num: " + gussedNum);
  }
  else if(gussedNum < randomNum){
    console.log("Try again, Actual number is greater than your num: " + gussedNum);
  }
  chances--;
}

alert("Hey congrats You guessed right, The Number is " + randomNum)
alert("your score is " + chances)
