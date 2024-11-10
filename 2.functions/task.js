function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  
  const sum = arr.reduce((a, b) => a + b)
 
  let avg = Number((sum / arr.length).toFixed(2))

  return { min: min, max: max, avg: avg };
}


function summElementsWorker(...arr) {
  if (arr == 0) {
    return 0
  }
  return arr.reduce((a, b) => a + b)
}

function differenceMaxMinWorker(...arr) {
  let maxMeaning = Math.max(...arr);
  let minMeaning = Math.min(...arr);
  if (maxMeaning === -Infinity && minMeaning === Infinity) {
    return 0;
  }
  return maxMeaning - minMeaning;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0; // четный
  let sumOddElement = 0; // нечетный
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
    }else {
      sumOddElement += arr[i]
    }
  }
  if(!sumEvenElement && !sumOddElement) {
    return 0;
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }    
  }
  if (!sumEvenElement) {
      return 0;
    }
  return sumEvenElement / countEvenElement
}

 function makeWork (arrOfArr, func) {
   let maxWorkerResult = -Infinity
   for (i = 0; i < arrOfArr.length; i++) {
     const result = func(...arrOfArr[i])
     if (result > maxWorkerResult) {
       maxWorkerResult = result;
     }
     console.log(result)
   }
   return maxWorkerResult;
 };
