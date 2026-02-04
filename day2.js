const aa=()=>{return{ user : "name"}};
console.log(aa());
const bb= ()=>[1,2,3,4,5,6];
console.log(bb());
const user={name:"John",age:30,
    welcome: function(){console.log("Welcome "+this.name);}
};

user.welcome();
console.log(user);
