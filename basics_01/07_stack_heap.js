// Stack(Primitive) and heap (Non Primitive)
let aMemory = "Superman"
let bMemory = aMemory
bMemory = "Batman"
console.log(aMemory);
console.log(bMemory);

let cMemory = {
    "user":"hello@user",
    "id":"323432"
}

let dMemory = cMemory
dMemory.id = "2"
console.log(cMemory.id);
console.log(dMemory.id);


