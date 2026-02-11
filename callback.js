function roll(num, next){
    setTimeout(() => {
        console.log("Roll no is ", + num);
        if(next) next();
    }, 2000)
}

roll(12212, ()=> {
    console.log("Wait its getiing downloaded");
    roll(12312, ()=> {
        console.log("Wait its getiing downloaded");
        roll(12412, ()=> {
            console.log("Wait its almost over");
            roll(12512);
        });
    });
});