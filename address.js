function cubeNumber(number) {
    if (typeof number === 'number' && number >= 0) {
    const result = Math.pow(number, 3);
    return result;
    } else {
    return "Invalid Number";
    }
    }

    function matchFinder(string1, string2) {
    if (typeof string1 === 'string' && typeof string2 === 'string') {
    if (string1.includes(string2)) {
    return true;
    }
    else {
    return false;
    }
    }
    else {
    return "Invalid String";
    }
    }

    function sortMaker(arr) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
    const number = arr[i];
    if (typeof number === 'number' && number >= 0) {
    newArray.push(number);
    } else {
    return "Invalid Input";
    }
    }
    if (newArray[0] === newArray[1]) {
    return "equal";
    }
    else if (newArray[0] < newArray[1]) {
    const temp = newArray[0];
    newArray[0] = newArray[1];
    newArray[1] = temp;
    return newArray;
    } else {
    return newArray;
    }
    }

    function findAddress(obj) {
    const newArray = [];
    for (let i = 0; i < obj.length; i++) {
    let addressObj = obj[i];
    let street = addressObj.street || "__";
    let house = addressObj.house || "__";
    let society = addressObj.society || "__";
    newArray.push(street, house, society);
    }
    return newArray;
    }
    
    function canPay(changeArray, totalDue) {
    if (changeArray.length === 0) {
    return "Input Array Is Empty";
    } else {
    let totalChipsPrice = 0;
    for (let i = 0; i < changeArray.length; i++) {
    totalChipsPrice = totalChipsPrice + changeArray[i];
    }
    if (totalChipsPrice >= totalDue) {
    return true;
    } else {
    return false;
    }
    }
    }