let arr = ["gun", "water", "snake"];
let stringGenerator = (arr) => {
  return arr[Math.floor(Math.random()*arr.length)]
}

let runAgain = true;
let comp=0, me=0;
while(runAgain){
  let compChoice = stringGenerator(arr);
  let myChoice = prompt("Enter your choice: ")

  if(compChoice=="gun" && myChoice=="water"){
    me++;
  }
  else if(compChoice=="gun" && myChoice=="snake"){
    comp++;
  }
  else if(compChoice=="water" && myChoice=="snake"){
    me++;
  }
  else if(compChoice=="water" && myChoice=="gun"){
    comp++;
  }
  else if(compChoice=="snake" && myChoice=="gun"){
    me++;
  }
  else if(compChoice=="snake" && myChoice=="water"){
    comp++;
  }
  console.log(compChoice)
  runAgain = confirm("Play Again?")
}

console.log("Computer: " + comp + " and You: " + me)
if(comp>me){
  console.log("Computer is the winner")
}
else if(comp<me){
  console.log("You are the winner")
}
else{
  console.log("Game Tied")
}
