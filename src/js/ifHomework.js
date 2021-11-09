 //1. Если а – четное посчитать а*б, иначе а+б
 function firstTask (a, b)
 {
    let result;
    if ((a % 2) === 0)
    {
        result = a * b;
    }else
    {
        result = a + b;
    }
    return result;
 }
 console.log(firstTask(20 , 4));

 //2. Определить какой четверти принадлежит точка с координатами (х,у)
 function secondTask(x,y)
 {
    let result;
    if (x > 0)
    {
        if (y > 0)
        {
            result = 1;
            console.log("Pervaya chetvert'");
        }
        else if (y === 0)
        {
            result = 0;
            console.log("Y = 0");
        }
        else
        {
            result = 4;
            console.log("Chetvertaya chetvert'")
        }
    }
    else if (x === 0)
    {
        result = 0;
        console.log("X = 0");
        if (y === 0)
        result = 0;
        console.log("Y = 0");
    }
    else 
    {
        if (y > 0)
        {
            result = 2;
            console.log("Vtoraya chetvert'");
        }
        else if (y === 0)
        {
            result = 0;
            console.log("Y = 0");
        }
        else
        {
            result = 3;
            console.log("Tretia chetvert'")
        }
    }
return result;
 }
 secondTask(1,1);

  //3. Найти суммы только положительных из трех чисел
  function thirdTask (a, b, c)
  {
      let sum = 0;
    if (a > 0)
        sum = sum + a;
    if (b > 0)
        sum +=b;
    if (c > 0)
        sum +=c;
    console.log(sum);
    return sum;

  }
 thirdTask(-2, 3, 4);

  //4. Посчитать выражение (макс(а*б*с, а+б+с))+3
  function forthTask(a, b, c)
  {
      let result;
      let firstResult = a * b * c;
      let secondResult = a + b + c;
    if (firstResult > secondResult)
    {
       console.log(firstResult += 3);
       result = firstResult;
       return result;
    }
    // Поскольку если они равны ответ не измениться не нужно создавать if для их равенства
    else
    {
        console.log(secondResult += 3);
        result = secondResult;
        return result
    }
    
  }
  forthTask(1, 1, 2);
 
  //5. Написать программу определения оценки студента по его рейтингу, на основе следующих правил
  function fifthTask(rating){
      switch (true){
          case (rating < 20) :
              console.log("F");
              return 1;
              break;
          case ((20 <= rating) && (rating < 40)) :
              console.log("E");
              return 2;
              break;
          case ((40 <= rating) && (rating < 60)) :
              console.log("D");
              return 3;
              break;
          case ((60 <= rating) && (rating < 75)) :
              console.log("C");
              return 4;
              break;
          case ((75 <= rating) && (rating < 90)) :
              console.log("B");
              return 5;
              break;
          case ((90 <= rating) && (rating <= 100)) :
              console.log("A");
              return 6;
              break;
          default :
              console.log("Error rating must be from 0 to 100");
              return 0;
              break;
      }
  }
  fifthTask();