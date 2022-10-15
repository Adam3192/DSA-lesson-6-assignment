// ************** Pseudo-code **************************
// 1-input 3 numbers
// 2-check to make sure all 3 inputs are actually numbers
// 3-if numbers proceed, if not console log "all inputs must be numbers"
// 4-initialize a new variable D to keep track of largest number
// 5-check if input A is greater than input B if so set variable D equal to the value of input A, else
//      set variable D equal to the value of input B
// 6-then check if variable D is greater than input C if so then console log the value that is stored
//      in variable D as this will be the largest number of the three inputs, else console log the 
//      value of input C because it is the largest number. 

// In my algorithm to solve this problem I am comparing the value of each input and keeping track
//      of which value is the largest. The time complexity and space complexity for my algorithm 
//      will both be O(n), where n is the number of inputs.

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

largestNumber(2.5, 5, -6);
largestNumber(231, 4751, 7000);
largestNumber(9000, 4751, 7000);

largestNumber('test', 4751, 7000);
largestNumber(231, 'apple', 7000);
largestNumber(231, 4751, 'banana');
