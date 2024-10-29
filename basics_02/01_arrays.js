// deep copy(Creates a new object along with copies of all nested objects recursively.) and 
// shallow copy(Creates a new object but inserts references to the original object’s elements.)
const myArrays = [2,34,64536,45,75,47,54]
const myArrays2 = {...myArrays}
// myArrays2[0] = 5
// console.log(myArrays[0]);
// console.log(myArrays2[0]);

myArrays.push(334)
console.log(myArrays);

// slice does not affect the original array and second index is also not included
// whereas splice affect the original arrat and second index is also included



