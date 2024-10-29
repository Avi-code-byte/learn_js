const formObject = {
    name:"Abhinav",
    age:23,
    city:"bhiwadi",
    hobby:"play",
}

//deep nesting can be done in the objects of javascript
const aDict = {1:"A",2:"B",3:"C",4:"D"}
const bDict = {5:"E",6:"F",7:"G",8:"H"}
const cDict = {aDict,bDict} 
//{
//     aDict: { '1': 'A', '2': 'B', '3': 'C', '4': 'D' },
//     bDict: { '5': 'E', '6': 'F', '7': 'G', '8': 'H' }
//   }
const dDict = Object.assign({},aDict,bDict)
// {
//     '1': 'A',
//     '2': 'B',
//     '3': 'C',
//     '4': 'D',
//     '5': 'E',
//     '6': 'F',
//     '7': 'G',
//     '8': 'H'
//   }
// console.log(aDict)
// console.log(bDict)
// console.log(dDict)
