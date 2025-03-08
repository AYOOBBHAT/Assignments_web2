const fs=require('fs');
const data =fs.readFileSync('ab.txt','utf8')
console.log(data);

function sum(a,b){
    return a+b;

}

function sub(a,b){
    return a-b;
}

function operand(a,b,op){
    return op(a,b);

}


console.log(operand(1,2,sum));

