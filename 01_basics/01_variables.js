const accountId = 144553;
let accountEmail = "test@gamil";
var accountPass = 123;
accity = "jaipur";

//accountId = 2 not allowed
accountEmail = "hc@hc.com"
accountPass = 999
accity = "Bengaluru"

/* 
prefer not to use var 
because of issue in block scope and functional scope
*/
console.log(accountId);
console.log(accountEmail);

console.table([accountEmail, accountId, accountPass, accity]);


