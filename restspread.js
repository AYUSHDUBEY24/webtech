// function add(...numbers){//rest operator ... three dots---array of numbers
//     let total = 0;
//     for(let i = 0; i < numbers.length; i++){
//         total += numbers[i];
//     }
//     return total;
// }
// console.log(add(1,2,3,4,5));


// let a =[1,2,3,34,45,88];
// let [first, second, ...rest] = a;//spread operator
// console.log(first,second,rest);


let a=[1,2]
let b=[3,4]
let c = [...a,...b]//spread operator;
console.log(c);