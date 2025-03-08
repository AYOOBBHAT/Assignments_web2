// class rectangle{
//     constructor(w,h,b){
//         this.width=w;
//         this.Height=h;;
//         this.breadth=b;


//     }



// volume(){
//     const area=this.width * this.Height*this.breadth;
//     return area;

// }



// }

// const vol=new rectangle(3,4,5);
// const ans=vol.volume();
// console.log(ans);

// function wait(resolve){
//     setTimeout(resolve,3000);
// }

// function setTimeout(){
//     return new Promise(wait);
// }

// function main(){
//     console.log("hii ");
// }

// setTimeout(3000).then(main);

// function wait(resolve) {
//     setTimeout(resolve, 3000); // Calls resolve after 3 seconds
// }

// function delay() {
//     return new Promise(wait); // Wraps setTimeout in a Promise
// }

// function main() {
//     console.log("hii ");
// }

// delay().then(main); // Waits for 3 seconds, then calls main()


const fs=require('fs');

function _readFile(file){
    setTimeout(file,3000);

}

function delay(){
    return new Promise(_readFile);

}



function newData(){
    const data =fs.readFileSync("ab.txt",'utf-8');
    console.log(data);

}

// function main() {
//         console.log("hii ");
//      }
delay().then(newData);

