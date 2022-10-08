
doubleValues([1,2,3]) // [2,4,6]
doubleValues([5,1,2,3,10]) // [10,2, 4,6,20]

function doubleValues (arr) {
    let newArr = [];
    arr.forEach(number){
        newArr.push(number*2);
    }
    return newArr;
}


function onlyEvenValues (arr) {
    let newArr = [];
    arr.forEach(function(number){
        if (number % 2 ===0){
            newArr.push(number);
        })
    }
    return newArr;
}


function showFirstAndLast (arr) {
    let newArr = [];
    arr.forEach(function(str){
        newArr.push(str[0]+str[-1]);
    })
    return newArr;
}


function addKeyAndValue(arr,key,value){
    arr.forEach(function(obj){
        obj[key] = value;
    })
    return arr;
}


function vowelCount (str){
    str.forEach(function(letter){
        let newLetter = letter.toLowerCase();
        let obj = {};
        const vowels = "aeiou";
        if (vowels.indexOf(newLetter) !== -1){
            if (!Object.keys(obj).includes(newLetter)){
                obj[newLetter] += 1;
            }
            else {
                obj[newLetter] = 1;
            }
        }
    })
    return obj;
}


function doubleValuesWithMap(arr){
    return arr.map(function(number){
        return number * 2;
    })
}


function valTimesIndex(arr){
    return arr.map(function(number,index){
        return number * index;
    })
}



function extractKey(arr,key){
    return arr.map(function(obj){
        return obj[key];
    })
}


function extractFullName(arr){
    return arr.map(function(obj){
        return obj[first]+ " " +obj[last];
    })
}


function filterByValue(arr,key){
    return arr.filter(function(obj){
        if (Object.keys(obj).includes(key)){
            return obj;
        }
    })
}


function find(arr,val){
    return arr.filter(function(num){
        if (num === val){
            return val;
        }
        else{
            return "undefined";
        }
    })
}



function findInObj(arr,key,value){
    return arr.filter(function(obj){
        return obj[key]===value;
    })
}


function removeVowels(str){
    const vowels = "aeiou";
    return let newLetter = str.toLowerCase.split("").filter(function(letter){
        return vowels.indexOf(letter) === -1;
    })
    newLetter.join("");
}


function doubleOddNumbers(arr){
    let newArr = arr.filter(function(number){
        return number % 2 ===1;
    })
    return newArr.map(function(number){
        return number * 2;
    })
}