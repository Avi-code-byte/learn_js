const var1 = "superman" //we cannot update the const value once created
let var3 = "flash"  //we can update the var3 value once updated
var var2 = "batman"  // should not prefer it as it is function scope not block scope, prefer var3
console.table([var1,var2,var3])