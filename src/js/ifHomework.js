 //1. Если а – четное посчитать а*б, иначе а+б
 function firstTask ()
 {
    let a = 19;
    let b = 4;
    let result;
    if ((a % 2) === 0)
    {
        result = a * b;
    }else
    {
        result = a + b;
    }
    console.log(result);
 }
 firstTask();

 //2. Определить какой четверти принадлежит точка с координатами (х,у)
 function secondTask()
 {
    let x = 1;
    let y = 1;
    if (x > 0)
    {
        if (y > 0)
        {
            console.log("Pervaya chetvert'");
        }
        else if (y === 0)
        {
            console.log("Y = 0");
        }
        else
        {
            console.log("Chetvertaya chetvert'")
        }
    }
    else if (x === 0)
    {
        console.log("X = 0");
        if (y === 0)
        console.log("Y = 0");
    }
    else 
    {
        if (y > 0)
        {
            console.log("Vtoraya chetvert'");
        }
        else if (y === 0)
        {
            console.log("Y = 0");
        }
        else
        {
            console.log("Tretia chetvert'")
        }
    }

 }
 secondTask();

  //3. Найти суммы только положительных из трех чисел
  function thirdTask ()
  {
      let a = -2;
      let b = 3;
      let c = 4;
      let sum = 0;
    if (a > 0)
        sum = sum + a;
    if (b > 0)
        sum +=b;
    if (c > 0)
        sum +=c;
    console.log(sum);

  }
 thirdTask();

  //4. Посчитать выражение (макс(а*б*с, а+б+с))+3
  function forthTask()
  {
      let a = 1;
      let b = 1;
      let c = 2;
      let firstResult = a * b * c;
      let secondResult = a + b + c;
    if (firstResult > secondResult)
    {
       console.log(firstResult += 3);
    }
    // Поскольку если они равны ответ не измениться не нужно создавать if для их равенства
    else
    {
        console.log(secondResult += 3);
    }
    
  }
  forthTask();
 
  //5. Написать программу определения оценки студента по его рейтингу, на основе следующих правил
  function fifthTask(){
      let rating = 100;
      switch (true){
          case (rating < 20) :
              console.log("F");
              break;
          case ((20 <= rating) && (rating < 40)) :
              console.log("E");
              break;
          case ((40 <= rating) && (rating < 60)) :
              console.log("D");
              break;
          case ((60 <= rating) && (rating < 75)) :
              console.log("C");
              break;
          case ((75 <= rating) && (rating < 90)) :
              console.log("B");
              break;
          case ((90 <= rating) && (rating <= 100)) :
              console.log("A");
              break;
          default :
              console.log("Error rating must be from 0 to 100");
              break;
      }
  }
  fifthTask();