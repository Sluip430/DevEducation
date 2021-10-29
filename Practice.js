
let number = 45;

function firstTask(number){
    if (!(isNaN(number)) && number > 0){
        for (let i = 1; i <= number; i++){
            if ((i % 3) === 0){
                ((i % 5) === 0)? console.log("ThreeFive") : console.log("Three");
            }else if ((i % 5) === 0){
                console.log("Five");
            }else{
                console.log(i);
            }
            
        }
    }
    else{
        console.log("Error! Enter normal number");
    }
}
//firstTask(number);
//////////////////////////////////////////////////////////////////////
 function secondTask(){
    for (let i = 0; i < 16; i++) { //! Эту строку можно изменить
    for (let j = 0; j < 20; j++) {
    if (i === 15 && j === 15) {
    return;
    }
    
    console.log(i, j);
    }
   }
 }

 //secondTask();

    a = "апельсин";
    b = "син"; 
  function thirdTask(firstWord , secondWord)
  {
    let checkNum = 0;

    for (let i = 0; i < firstWord.length; i++)
    {
        let checkSym = firstWord[i];
        
        for (let j = 0; j < secondWord.length; j++)
        {
            if (checkSym === secondWord[j])
            {
                checkNum++;
            }
        }
    }
    if (checkNum >= secondWord.length)
    {
        console.log("Anograms");
    }else
    {
        console.log("No Anograms");
    }
  }

 thirdTask(a,b);




 