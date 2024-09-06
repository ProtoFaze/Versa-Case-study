import {promises as fs} from 'fs';

const array : string[] = [];// declare empty string array

for (let i = 1; i<=100; i++){// iterate from 1 to 100
    // replace values divisible by 3,5,or both with "BiIG", "BANG", "BIGBANG" respectively
    if(i % 3 === 0 && i % 5 === 0){ 
        array.push("BIGBANG")
    }if(i % 3 === 0){
        array.push("BIG")
    }if(i % 5 === 0){
        array.push("BANG")
    }else{
        array.push(i.toString())
    }
}
const output = JSON.stringify(array); // convert array to json string

fs.writeFile("output.json", output) // write to file
    .then(()=>{
        console.log("file saved")
    })
    .catch((err: Error) => {
        console.error("Error occured:", err)
    });