// Style of writing function before ES6
function doubleIt1(num){
    return num*2
}
const result1 = doubleIt1(50);
console.log(result1);



// Another style of retuen function before ES6
const doubleIt2 =  function myFun0(num){
    return num*2;
}
const result2 = doubleIt2(50);
console.log(result2);




// Style of return fucntion after ES6
const doubleIt3 = num => num*2;
const result3 = doubleIt3(50);
console.log(result3);




// Style of return function when we have to pass more than one perameter after ES6
const add = (x,y) => x + y;

const result4 = add(50,70);
console.log(result4);



// Style of rerturn function after ES6 when we don't have any perameter 
const add2 = () => 5;
const result5 = add2();
console.log(result5);



// Style of return function after ES6 when we have to make a big functio we should use curle braces
const bishalFunction = (x,y) => {
    const sum = x+y;
    const diff = x-y;
    const result6 = sum * diff;
    return result6; // when it is a multiline function we have to return the fucntion in ES6 otherwise we don't need to return it

}
const result6Final = bishalFunction(5,6);
console.log(result6Final); 



