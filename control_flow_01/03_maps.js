//Maps are key value pairs like objecrts but keys are always unique, object is not iteratable in for of
let myMap = new Map();

myMap.set(2, 'Alice');
myMap.set(4, 30);
myMap.set(6, 'Engineer');

for(let [key,value] of myMap){
  value = key*4
  console.log(`[ ${key} , ${value} ]`);
  
  
}