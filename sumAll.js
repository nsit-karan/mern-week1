function sumAll(startIndex, endIndex) {
    var sum = 0;
    for (var i = startIndex; i < endIndex; i++) {
        sum += i;
    }
    return sum
}

var sumNos = sumAll(1, 100);
console.log(sumNos);


function sum(index1, index2) {
    return index1 + index2;
}

function multiply (index1, index2) {
    return index1 * index2;
}

function doArithmetic (firstEl, secondEl, arithFunc) {
    return arithFunc(firstEl, secondEl);
}

var ans = doArithmetic (1, 2, sum);
console.log(ans);