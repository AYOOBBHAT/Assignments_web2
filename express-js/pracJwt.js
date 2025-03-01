const jwt=require("jsonwebtoken");
const value={
    name:"ayoob",
    acnum:1234
}
const token=jwt.sign(value,"secret");
console.log(token);