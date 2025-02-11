const sortedSquares = function(A) {
  const sumArr = []
  
  for (let i = 0; i < A.length; i++) {
      let num = A[i]
      num *= num
      sumArr.push(num)
  }
  return sumArr.sort((a, b) => a - b)
}

console.log(sortedSquares([-7,-3,2,3,11]));
