myNums = [1,2,34,5,6,6,7]
initial_val = 0
const totalNum = myNums.reduce((accumulative_val, current_val)=>{
    return accumulative_val + current_val
}, initial_val)

console.log(totalNum);
