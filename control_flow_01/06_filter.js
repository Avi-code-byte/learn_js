// if we want to retuen any value in the for each it is impossible, so we use filter in place 


const myNUms = [1,2,3,5,6,7,8,9,4]

let sup = myNUms.filter((item)=>{
    if (item >5){
        return item
    }
})

// if curly braces, return should be there and if not no necessary  

let sup2 = myNUms.filter((item)=>(item>5))

console.log(sup2);
