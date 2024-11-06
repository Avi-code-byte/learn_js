const num = [1,2,3,45,6,7,8,9,0,5]
// const newNums = num.map((item) => item+10)

// console.log(newNums);

//Chaining is nothing just adding multiple fumction in line using multiple dots

const newNums = num.map((item) => item+10).map((item)=>item*2)

console.log(newNums);
