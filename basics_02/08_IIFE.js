// IIFE Immediately Invoked Function Expressions
// it is use to immidiately invoke a function and also to avoid unnecessary garbage cuse of variable and calling function
//also semicolon is necessary here
(function helloWorld(){
    console.log("here is code ");
    
})();

(()=>(console.log("hereis also code")))();

((name)=>(console.log(`hereis also code in${name}`)))('superman');