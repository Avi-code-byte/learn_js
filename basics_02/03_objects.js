const formObject = {
    name:"Abhinav",
    age:23,
    city:"bhiwadi",
    hobby:"play",
    "gender":"male"
}
// console.log(formObject.name);
// console.log(formObject["name"]);
//good for both but the syntext to get the value but the gender value can be accessible by [] only

formObject.greet = function(){
    console.log("there is the fucntion");
    
}

formObject.greethello = function () {
    console.log(`Here is the function ${this.name}`);
    return "there is the guy"
}

console.log(formObject.greethello())
formObject.greet()
