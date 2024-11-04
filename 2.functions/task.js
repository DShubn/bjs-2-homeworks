function getArrayParams(...arr) {
  let min = Infinity
  let max = -Infinity
  
  for (let i = 0; i < arr.length; i++) {
    if (i > max) {
     min = arr[i];
    }
    
    if (i < min) {
      max = arr[i];
    }
  }
  const sum = arr.reduce(function(a, b){
    return a + b;
  }, 0)
  let avg = Number((sum / arr.length).toFixed(2))

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let calcSum = arr.reduce(function(a, b) {
    return a + b;
  }, 0); 
  return calcSum
}

function differenceMaxMinWorker(...arr) {
  let maxMeaning = Math.max(...arr);
  let minMeaning = Math.min(...arr);
  return maxMeaning - minMeaning;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let difference;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2) {
      sumEvenElement++;
    }else {
      sumOddElement++;
    }
  }
  
    if (sumEvenElement > sumOddElement) {
      difference = sumEvenElement - sumOddElement;
  }else if (sumOddElement > sumEvenElement) {
      difference = sumOddElement - sumEvenElement;
  }
  return difference 
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  return sumEvenElement / countEvenElement
}

function makeWork (arrOfArr, func) {

}
