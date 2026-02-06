const st ={
    name:"ayush",
    age:21,
    adress:{
    city:"varanasi",
    state:"up"
}
}
// const name=st.name;
// const age=st.age;
// console.log(name,age);




//destructuring
const {name,age}=st;
console.log(name,age);

const {city,state}=st.adress;
console.log(city,state);


function display(object){
    console.log(`Name is ${object.name} and age is ${object.age}`);
}
display(st);