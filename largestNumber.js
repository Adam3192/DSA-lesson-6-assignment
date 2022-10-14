function largestNumber(A, B, C) {
 let D = 0

 if(isNaN(A) || isNaN(B) || isNaN(C)) {
  return console.log('all inputs must be numbers')
 }

 if(A > B) {
  D = A
 } else {
  D = B
 }

 if(D > C) {
  console.log(D)
 } else {
  console.log(C)
 }

}

largestNumber(2, 5, 1);
largestNumber(231, 4751, 7000);
