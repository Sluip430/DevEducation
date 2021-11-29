let current = {
    value : null,
    next : null
};

let head = {
    value : null,
    next : null
};

function addElement (number){
    if (Array.isArray(number)){
        number.forEach(function(item){
            addElement(item);
        });
    }else{
        if (head.next === null && head.value === null){
            head.value = number;
        }else if (head.next === null && head.value !== null){
            head.next = {value : number, next : null};
        }else{
            current = head.next;
            while (current.next !== null){
                current = current.next;
            }
            current.next = {value : number, next : null}
        }
    }
    
}

function showElement (){
    current = head;
    while (current.next !== null){
        console.log(current.value);
        current = current.next;
    }
    console.log(current.value);
}

function deleteElementByValue(key){
    current = head;
    while (current.next.next !== null) {
        if (current.next.value === key){
            current.next.value == null;
            current.next= current.next.next;
        }else{
            current = current.next;
        }
    }
}

function deleteLastListElement(){
    if(head.next === null){
        head.value = null;
    }else{
        current = head;
        while (current.next.next !== null){
            current = current.next;
        }
        current.next = null;
    }
    
}

function getListLong(){
    let count = 0;
    if (head.value === null && head.next === null){
        count = 0;
        return count;
    }
    current = head;
    while (current.next !== null){
        count++
        current = current.next;
    }
    count++
    return count;
}

function getValueByIndex (index){
    if (index === 1){
        return head.value;
    }else{
        current = head;
        for (let i = 1; i < index; i++){
            current = current.next;
        }
        return current.value;
    }
}

function getIndexByValue (key){
    current = head;
    count = 0;
    do {
        count++
        if (current.value === key){
            return count
        }else{
            current = current.next;
        }
        
    } while (current.next !== null)
    if (current.value === key){
        return count + 1;
    }
}

addElement(5);
addElement(7);
