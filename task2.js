// function aa(){// asynchronous function
//     console.log("first");

// }
// setTimeout(aa, 4000);

//setinterval()--repeatedly executes a function at specified intervals (in milliseconds) until it is stopped. It returns an interval ID which can be used to stop the execution using clearInterval().

let count = 0;
let Id = setInterval(() => {
    console.log("hello world");
    count++;
    if(count === 5) {
        clearInterval(Id);
    }
}, 2000);
