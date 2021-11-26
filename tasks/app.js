function tickets(array) {
    let money = 0;
    let isEnough = true;
    array.forEach(function(item){
        if (Number(item) === 25){
            money += 25;
        }else if (Number(item) === 50){
            if (money >= 25){
                money += 25;
            }else{
                return isEnough = false
            }
        }else{
            if (money >= 75){
                money += 25;
            }else{
                return isEnough = false
            }
        }
    })
    console.log(isEnough);
    return isEnough
}

// tickets([25, 25, 50]); // => YES
// tickets([25, 100]);    // => NO. Vasya will not have enough money to give change to 100 dollars
// tickets([25, 25, 50, 100]); // Yes
// tickets([25, 50, 100]); // No
// tickets(['25', '25', '50', '100']); // Yes
// tickets(['25', '50', '100']); // No

function getSum(strOne, strTwo){
    let sum;
    if (strOne.length !== strTwo.length){
        if (strOne.length < strTwo.length){
            strOne = fillString(strOne, strTwo.length - strOne.length);
        }else{
            strTwo = fillString(strTwo, strOne.length - strTwo.length);
        }
    }
    sum = getSumStr(strOne,strTwo);
    return sum
}

function fillString(string, count){
    let newStr = "";
    for (let i = 0; i < count; i++){
        newStr = newStr.concat("0");
    }
    newStr = newStr.concat(string);
    return newStr
}

function getSumStr(str1, str2){
    let sum = "";
    let temp = 0;
    for (let i = str1.length - 1; i >= 0; i--){
        temp = String(Number(str1[i]) + Number(str2[i]) + Number(temp));
        if (temp.length === 2){
            sum = sum.concat(temp[1]);
            temp = temp[0];
        }else{
            sum = sum.concat(temp);
            temp = 0;
        }
    }
    if (temp !== 0){
        sum = sum.concat(temp);
    }
    sum = sum.split("").reverse().join("");
    return sum;
}

//console.log(getSum("123456789" , "987654321"));

let listOfPosts2 = [
    {
        id: 1,
        post: 'some post1',
        title: 'title 1',
        author: 'Ivanov',
        comments: [
            {
                id: 1.1,
                comment: 'some comment1',
                title: 'title 1',
                author: 'Rimus'
            },
            {
                id: 1.2,
                comment: 'some comment2',
                title: 'title 2',
                author: 'Uncle'
            }
        ]
    },
    {
        id: 2,
        post: 'some post2',
        title: 'title 2',
        author: 'Ivanov',
        comments: [
            {
                id: 1.1,
                comment: 'some comment1',
                title: 'title 1',
                author: 'Rimus'
            },
            {
                id: 1.2,
                comment: 'some comment2',
                title: 'title 2',
                author: 'Uncle'
            },
            {
                id: 1.3,
                comment: 'some comment3',
                title: 'title 3',
                author: 'Rimus'
            }
        ]
    },
    {
        id: 3,
        post: 'some post3',
        title: 'title 3',
        author: 'Rimus'
    },
    {
        id: 4,
        post: 'some post4',
        title: 'title 4',
        author: 'Uncle'
    }

]

function getQuntityPostsByAuthor (list, string) {
    let countPost = 0;
    let countComments = 0;
    let temp
    list.forEach(function(item){
        if(item.author === string){
            countPost++;
        }
        if (item.comments !== undefined){
            item.comments.forEach(function(item){
                if(item.author === string){
                    countComments++;
                }
            })
        }
    })
    console.log(`Count of Post ${countPost}`);
    console.log(`Count of Comments ${countComments}`);
    return [countPost, countComments]
}

//getQuntityPostsByAuthor(listOfPosts2, "Rimus")

let complexFunction = (arg1, arg2) => arg1 + arg2;

function cache() {
  let array = [];
  return function () {
    if (array.includes(arguments[0])) {
      return array;
    }
    array.push(arguments[0]);
    return array;
  };
}

let cachedFunc = cache();
console.log(cachedFunc(complexFunction("foo", "bar")));
console.log(cachedFunc(complexFunction("foo", "bar")));
console.log(cachedFunc(complexFunction("foo", "baz")));

