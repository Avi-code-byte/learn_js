const marvelArray = ["thor","ironman","spiderman"]
const dcArray = ["batman","superman","flash"]
// marvelArray.push(dcArray)  //[ 'thor', 'ironman', 'spiderman', [ 'batman', 'superman', 'flash' ] ]
// const all_Array = marvelArray.concat(dcArray) //[ 'thor', 'ironman', 'spiderman', 'batman', 'superman', 'flash' ]
// const all_Array  = [...dcArray,...marvelArray] //[ 'thor', 'ironman', 'spiderman', 'batman', 'superman', 'flash' ]
// console.log(all_Array);
const name = "peterparker"
console.log(Array.from(name));

